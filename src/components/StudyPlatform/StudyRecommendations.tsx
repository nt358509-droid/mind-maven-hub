import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Clock, 
  TrendingUp, 
  Target, 
  BookOpen,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar
} from "lucide-react";

const recommendations = [
  {
    id: 1,
    type: "urgent",
    title: "Focus on Calculus Derivatives",
    description: "Your recent quiz scores show difficulty with derivative rules. Spend 30-45 minutes reviewing the chain rule and product rule.",
    priority: "High",
    estimatedTime: "45 min",
    confidence: 92,
    tags: ["Mathematics", "Calculus", "Practice"],
    action: "Start Review"
  },
  {
    id: 2,
    type: "opportunity",
    title: "Strengthen Historical Timeline Knowledge",
    description: "You're doing well with historical analysis, but timeline memorization could use work. Try the chronology flashcards.",
    priority: "Medium",
    estimatedTime: "20 min",
    confidence: 78,
    tags: ["History", "Memory", "Flashcards"],
    action: "Practice Now"
  },
  {
    id: 3,
    type: "reinforcement",
    title: "Literature Analysis Skills",
    description: "Excellent progress in literary analysis! Consider tackling more complex texts to maintain momentum.",
    priority: "Low",
    estimatedTime: "60 min",
    confidence: 85,
    tags: ["Literature", "Analysis", "Advanced"],
    action: "Continue"
  },
  {
    id: 4,
    type: "preparation",
    title: "Upcoming Physics Quiz Prep",
    description: "Based on your study pattern, review thermodynamics concepts before tomorrow's quiz.",
    priority: "High",
    estimatedTime: "35 min",
    confidence: 88,
    tags: ["Physics", "Quiz Prep", "Thermodynamics"],
    action: "Prepare"
  }
];

const studyTips = [
  {
    icon: Clock,
    title: "Optimal Study Time",
    tip: "Your peak performance is between 2-4 PM. Schedule challenging topics during this window."
  },
  {
    icon: TrendingUp,
    title: "Progress Pattern",
    tip: "You show 23% better retention with spaced repetition. Use the built-in scheduler."
  },
  {
    icon: Target,
    title: "Goal Achievement",
    tip: "You're 78% towards your monthly goal. 3 more study sessions will get you there!"
  }
];

export const StudyRecommendations = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'destructive';
      case 'Medium': return 'default';
      case 'Low': return 'secondary';
      default: return 'default';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'urgent': return Target;
      case 'opportunity': return TrendingUp;
      case 'reinforcement': return CheckCircle;
      case 'preparation': return Calendar;
      default: return Lightbulb;
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Recommendations */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            AI Study Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendations.map((rec) => {
            const IconComponent = getTypeIcon(rec.type);
            
            return (
              <Card key={rec.id} className="gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-foreground">{rec.title}</h4>
                          <Badge variant={getPriorityColor(rec.priority) as any} className="text-xs">
                            {rec.priority}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {rec.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {rec.estimatedTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {rec.confidence}% confidence
                      </div>
                    </div>
                    
                    <Button size="sm" className="gradient-primary text-white border-0">
                      {rec.action}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  <div className="flex gap-2 mt-4">
                    {rec.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </CardContent>
      </Card>

      {/* Study Tips */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-accent" />
            Personalized Study Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {studyTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-4 p-4 gradient-card rounded-lg border-0">
                <div className="p-2 bg-accent/10 rounded-full">
                  <tip.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm mb-1">{tip.title}</h5>
                  <p className="text-muted-foreground text-sm">{tip.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-success" />
            Quick Study Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Button variant="outline" className="justify-start h-auto p-4">
              <BookOpen className="w-5 h-5 mr-3 text-primary" />
              <div className="text-left">
                <div className="font-medium">Generate Quiz</div>
                <div className="text-xs text-muted-foreground">From recent materials</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <Brain className="w-5 h-5 mr-3 text-accent" />
              <div className="text-left">
                <div className="font-medium">AI Tutor</div>
                <div className="text-xs text-muted-foreground">Ask questions</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <Calendar className="w-5 h-5 mr-3 text-success" />
              <div className="text-left">
                <div className="font-medium">Schedule Study</div>
                <div className="text-xs text-muted-foreground">Plan sessions</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};