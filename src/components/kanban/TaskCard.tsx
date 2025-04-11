
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getEmployeeById } from "@/services/taskMockData";
import { Task, TaskPriority } from "@/types/task";
import { CalendarClock, MessageSquare, User } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

interface TaskCardProps {
  task: Task;
}

const PriorityBadge = ({ priority }: { priority: TaskPriority }) => {
  const colorMap: Record<TaskPriority, string> = {
    low: "bg-blue-100 text-blue-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-orange-100 text-orange-800",
    urgent: "bg-red-100 text-red-800"
  };

  return (
    <span className={`text-xs font-medium px-2 py-1 rounded-full ${colorMap[priority]}`}>
      {priority}
    </span>
  );
};

export function TaskCard({ task }: TaskCardProps) {
  const assignee = getEmployeeById(task.assigneeId);
  
  return (
    <Card className="mb-3 cursor-grab hover:shadow-md transition-shadow">
      <CardHeader className="p-3 pb-0">
        <div className="flex justify-between items-start">
          <span className="text-xs font-medium text-gray-500">{task.id}</span>
          <PriorityBadge priority={task.priority} />
        </div>
        <h3 className="font-medium text-sm mt-1">{task.title}</h3>
      </CardHeader>
      <CardContent className="p-3 text-xs text-gray-500">
        <p className="line-clamp-2">{task.description}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {task.labels.slice(0, 2).map(label => (
            <Badge key={label} variant="outline" className="text-xs py-0">
              {label}
            </Badge>
          ))}
          {task.labels.length > 2 && (
            <Badge variant="outline" className="text-xs py-0">
              +{task.labels.length - 2}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0 flex justify-between text-gray-500">
        <div className="flex items-center text-xs">
          {task.dueDate && (
            <div className="flex items-center gap-1 mr-2" title="Due date">
              <CalendarClock className="w-3 h-3" />
              <span>{format(new Date(task.dueDate), 'MMM d')}</span>
            </div>
          )}
          {task.comments.length > 0 && (
            <div className="flex items-center gap-1" title="Comments">
              <MessageSquare className="w-3 h-3" />
              <span>{task.comments.length}</span>
            </div>
          )}
        </div>
        {assignee ? (
          <Avatar className="h-6 w-6" title={assignee.name}>
            <AvatarImage src={assignee.avatarUrl} alt={assignee.name} />
            <AvatarFallback className="text-xs">
              {assignee.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        ) : (
          <Avatar className="h-6 w-6 bg-gray-200" title="Unassigned">
            <User className="h-3 w-3 text-gray-500" />
          </Avatar>
        )}
      </CardFooter>
    </Card>
  );
}
