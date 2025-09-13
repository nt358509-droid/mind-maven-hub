import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, BookOpen, BarChart3, Brain, FileText, Target } from "lucide-react";
import heroImage from "@/assets/hero-study-platform.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero">
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                AI-Powered
                <br />
                <span className="text-primary-glow">Study Platform</span>
              </h1>
              <p className="text-xl text-white/90 max-w-lg">
                Transform your learning with intelligent document processing, automated assessments, and personalized study recommendations powered by AI.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 transition-medium shadow-large">
                <Upload className="w-5 h-5 mr-2" />
                Upload Documents
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 transition-medium">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Analytics
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: FileText, label: "Document Processing" },
                { icon: Target, label: "Smart Assessments" },
                { icon: Brain, label: "AI Recommendations" },
                { icon: BookOpen, label: "Progress Tracking" }
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                  <Icon className="w-4 h-4 text-white" />
                  <span className="text-sm text-white/90">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <Card className="p-8 gradient-card border-white/10 shadow-glow">
              <img 
                src={heroImage} 
                alt="AI-powered study platform with analytics and document processing"
                className="w-full h-auto rounded-lg shadow-large"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};