
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { tasks } from "@/services/taskMockData";
import { Clock, CheckCircle2, AlertCircle, CircleDashed } from "lucide-react";

export function TaskSummary() {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === "done").length;
  const inProgressTasks = tasks.filter(task => task.status === "in-progress").length;
  const highPriorityTasks = tasks.filter(task => task.priority === "high" || task.priority === "urgent").length;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <SummaryCard 
        title="Total Tasks" 
        value={totalTasks.toString()} 
        icon={<CircleDashed className="h-5 w-5 text-muted-foreground" />}
        description="All tasks"
      />
      
      <SummaryCard 
        title="Completed" 
        value={completedTasks.toString()} 
        icon={<CheckCircle2 className="h-5 w-5 text-green-500" />}
        description={`${Math.round((completedTasks / totalTasks) * 100)}% of all tasks`}
      />
      
      <SummaryCard 
        title="In Progress" 
        value={inProgressTasks.toString()} 
        icon={<Clock className="h-5 w-5 text-blue-500" />}
        description="Tasks currently being worked on"
      />
      
      <SummaryCard 
        title="High Priority" 
        value={highPriorityTasks.toString()} 
        icon={<AlertCircle className="h-5 w-5 text-red-500" />}
        description="Tasks requiring immediate attention"
      />
    </div>
  );
}

interface SummaryCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

function SummaryCard({ title, value, description, icon }: SummaryCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <CardDescription className="text-xs mt-1">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
