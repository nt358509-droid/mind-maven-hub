import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Upload, 
  Brain, 
  BookOpen, 
  Settings, 
  User,
  Menu,
  X
} from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, badge: null },
    { id: 'upload', label: 'Upload', icon: Upload, badge: null },
    { id: 'recommendations', label: 'AI Insights', icon: Brain, badge: '3' },
    { id: 'library', label: 'Library', icon: BookOpen, badge: null },
  ];

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-between p-6 bg-card/50 backdrop-blur-sm border-b border-border/50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="p-2 gradient-primary rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">StudyPlatform AI</h1>
          </div>

          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => handleSectionChange(item.id)}
                className={`relative ${
                  activeSection === item.id 
                    ? 'gradient-primary text-white border-0' 
                    : 'hover:bg-muted/50'
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
                {item.badge && (
                  <Badge 
                    variant="destructive" 
                    className="ml-2 px-1 py-0 text-xs h-5 min-w-5"
                  >
                    {item.badge}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden">
        <div className="flex items-center justify-between p-4 bg-card/50 backdrop-blur-sm border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="p-2 gradient-primary rounded-lg">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold text-foreground">StudyPlatform</h1>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border/50 p-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleSectionChange(item.id)}
                  className={`w-full justify-start ${
                    activeSection === item.id 
                      ? 'gradient-primary text-white border-0' 
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                  {item.badge && (
                    <Badge 
                      variant="destructive" 
                      className="ml-auto px-1 py-0 text-xs h-5 min-w-5"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </Button>
              ))}
              
              <div className="border-t border-border/50 pt-2 mt-4">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};