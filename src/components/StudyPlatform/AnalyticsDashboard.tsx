import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Target, 
  BookOpen,
  Brain,
  Award,
  Calendar
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const studyData = [
  { date: '2024-01-01', hours: 2.5, score: 78 },
  { date: '2024-01-02', hours: 3.2, score: 82 },
  { date: '2024-01-03', hours: 1.8, score: 75 },
  { date: '2024-01-04', hours: 4.1, score: 88 },
  { date: '2024-01-05', hours: 2.9, score: 85 },
  { date: '2024-01-06', hours: 3.7, score: 92 },
  { date: '2024-01-07', hours: 2.3, score: 79 },
];

const subjectData = [
  { subject: 'Mathematics', progress: 85, color: '#3b82f6' },
  { subject: 'Science', progress: 72, color: '#10b981' },
  { subject: 'History', progress: 68, color: '#f59e0b' },
  { subject: 'Literature', progress: 91, color: '#8b5cf6' },
];

const performanceData = [
  { name: 'Excellent', value: 35, color: '#10b981' },
  { name: 'Good', value: 45, color: '#3b82f6' },
  { name: 'Needs Work', value: 20, color: '#f59e0b' },
];

export const AnalyticsDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="gradient-card shadow-soft border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Study Hours</p>
                <p className="text-3xl font-bold text-primary">24.5</p>
                <p className="text-xs text-success flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +12% from last week
                </p>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Clock className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-soft border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Score</p>
                <p className="text-3xl font-bold text-success">84%</p>
                <p className="text-xs text-success flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +5% improvement
                </p>
              </div>
              <div className="p-3 bg-success/10 rounded-full">
                <Target className="w-6 h-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-soft border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-3xl font-bold text-accent">47</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Documents processed
                </p>
              </div>
              <div className="p-3 bg-accent/10 rounded-full">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-soft border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">AI Insights</p>
                <p className="text-3xl font-bold text-primary">127</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Recommendations given
                </p>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Brain className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Study Progress Chart */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Study Progress Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={studyData}>
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="hsl(var(--primary))" 
                  fillOpacity={1} 
                  fill="url(#colorHours)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance Distribution */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-success" />
              Performance Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={performanceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {performanceData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject Progress */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent" />
            Subject Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {subjectData.map((subject) => (
              <div key={subject.subject} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{subject.subject}</span>
                  <Badge variant="outline" className="text-xs">
                    {subject.progress}%
                  </Badge>
                </div>
                <Progress 
                  value={subject.progress} 
                  className="h-2"
                  style={{
                    ['--progress-background' as any]: subject.color
                  }}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};