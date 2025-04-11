
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getEmployeeById, tasks } from "@/services/taskMockData";
import { format } from "date-fns";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";

export function RecentTasks() {
  // Get most recently updated 5 tasks
  const recentTasks = [...tasks]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTasks.map(task => {
            const assignee = getEmployeeById(task.assigneeId);
            const updatedDate = new Date(task.updatedAt);
            
            return (
              <div key={task.id} className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  {assignee && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={assignee.avatarUrl} alt={assignee.name} />
                      <AvatarFallback className="text-xs">
                        {assignee.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <div className="flex gap-2 items-center">
                      <span className="text-xs text-muted-foreground">{task.id}</span>
                      <Badge className="text-xs" variant={task.status === "done" ? "default" : "outline"}>
                        {task.status.replace("-", " ")}
                      </Badge>
                    </div>
                    <h4 className="text-sm font-medium">{task.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Updated {formatDistanceToNow(updatedDate, { addSuffix: true })}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  {task.dueDate && (
                    <span>Due {format(new Date(task.dueDate), 'MMM d')}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
