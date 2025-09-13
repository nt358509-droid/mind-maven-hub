import { useState } from "react";
import { Navigation } from "@/components/StudyPlatform/Navigation";
import { HeroSection } from "@/components/StudyPlatform/HeroSection";
import { DocumentUpload } from "@/components/StudyPlatform/DocumentUpload";
import { AnalyticsDashboard } from "@/components/StudyPlatform/AnalyticsDashboard";
import { StudyRecommendations } from "@/components/StudyPlatform/StudyRecommendations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Clock, Users } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <AnalyticsDashboard />;
      case 'upload':
        return <DocumentUpload />;
      case 'recommendations':
        return <StudyRecommendations />;
      case 'library':
        return <StudyLibrary />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {activeSection !== 'hero' && (
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
      )}
      
      <main className="transition-all duration-300">
        {activeSection === 'hero' ? (
          <div>
            <HeroSection />
            <div className="container mx-auto px-6 py-12">
              <div className="text-center mb-12">
                <Button 
                  onClick={() => setActiveSection('dashboard')}
                  size="lg" 
                  className="gradient-primary text-white border-0 text-lg px-8 py-4"
                >
                  Enter Platform
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto p-6">
            {renderContent()}
          </div>
        )}
      </main>
    </div>
  );
};

// Study Library Component
const StudyLibrary = () => {
  const documents = [
    {
      id: 1,
      title: "Advanced Calculus Notes",
      type: "PDF",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      status: "Processed",
      subjects: ["Mathematics", "Calculus"]
    },
    {
      id: 2,
      title: "World War II Timeline",
      type: "DOCX",
      size: "1.8 MB",
      uploadDate: "2024-01-14",
      status: "Processing",
      subjects: ["History"]
    },
    {
      id: 3,
      title: "Shakespeare Analysis",
      type: "PDF",
      size: "3.1 MB",
      uploadDate: "2024-01-13",
      status: "Processed",
      subjects: ["Literature", "English"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Study Library</h2>
        <Button className="gradient-primary text-white border-0">
          <FileText className="w-4 h-4 mr-2" />
          Upload New Document
        </Button>
      </div>

      <div className="grid gap-4">
        {documents.map((doc) => (
          <Card key={doc.id} className="gradient-card shadow-soft border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{doc.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span>{doc.type} • {doc.size}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {doc.uploadDate}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      doc.status === 'Processed' 
                        ? 'bg-success/10 text-success' 
                        : 'bg-accent/10 text-accent'
                    }`}>
                      {doc.status}
                    </div>
                    <div className="flex gap-1 mt-2">
                      {doc.subjects.map((subject) => (
                        <span key={subject} className="text-xs px-2 py-1 bg-muted rounded-full">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Button size="sm" variant="outline">View</Button>
                    <Button size="sm" className="gradient-primary text-white border-0">Quiz</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
