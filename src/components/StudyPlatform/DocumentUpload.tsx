import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, CheckCircle, X, FileIcon } from "lucide-react";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  progress: number;
  status: 'uploading' | 'processing' | 'completed' | 'error';
}

export const DocumentUpload = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const { toast } = useToast();

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    processFiles(selectedFiles);
  };

  const processFiles = (fileList: File[]) => {
    fileList.forEach((file) => {
      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        progress: 0,
        status: 'uploading'
      };

      setFiles(prev => [...prev, newFile]);

      // Simulate file processing
      simulateFileProcessing(newFile.id);
    });
  };

  const simulateFileProcessing = (fileId: string) => {
    let progress = 0;
    
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      
      setFiles(prev => prev.map(file => 
        file.id === fileId 
          ? { 
              ...file, 
              progress: Math.min(progress, 100),
              status: progress >= 100 ? 'processing' : 'uploading'
            }
          : file
      ));

      if (progress >= 100) {
        clearInterval(interval);
        
        // Switch to processing phase
        setTimeout(() => {
          setFiles(prev => prev.map(file => 
            file.id === fileId 
              ? { ...file, status: 'completed' }
              : file
          ));
          
          toast({
            title: "Document processed successfully",
            description: "Ready for assessment generation and analysis",
          });
        }, 2000);
      }
    }, 200);
  };

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Card className="shadow-medium">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-5 h-5 text-primary" />
          Document Upload & Processing
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Drop Zone */}
        <div
          className={`
            relative border-2 border-dashed rounded-lg p-8 text-center transition-all
            ${isDragOver 
              ? 'border-primary bg-primary/5 scale-105' 
              : 'border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/30'
            }
          `}
          onDrop={handleDrop}
          onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
          onDragLeave={() => setIsDragOver(false)}
        >
          <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Upload Study Materials</h3>
          <p className="text-muted-foreground mb-4">
            Drag & drop files here, or click to select
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Supports: PDF, DOCX, TXT, MD • Max 20MB per file
          </p>
          
          <Button className="gradient-primary text-white border-0">
            Choose Files
          </Button>
          
          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.txt,.md"
            onChange={handleFileInput}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Processing Files</h4>
            {files.map((file) => (
              <div key={file.id} className="border rounded-lg p-4 gradient-card">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <FileIcon className="w-8 h-8 text-primary" />
                    <div>
                      <h5 className="font-medium text-sm">{file.name}</h5>
                      <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {file.status === 'completed' && (
                      <CheckCircle className="w-5 h-5 text-success" />
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFile(file.id)}
                      className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {file.status !== 'completed' && (
                  <div className="space-y-2">
                    <Progress value={file.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {file.status === 'uploading' ? 'Uploading...' : 'Processing with AI...'}
                    </p>
                  </div>
                )}
                
                {file.status === 'completed' && (
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline" className="text-xs">
                      Generate Quiz
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs">
                      View Analysis
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};