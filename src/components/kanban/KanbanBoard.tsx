
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTasksByStatus } from "@/services/taskMockData";
import { Task, TaskColumn } from "@/types/task";
import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function KanbanBoard() {
  const [columns, setColumns] = useState<TaskColumn[]>(getTasksByStatus());
  
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 h-full">
      {columns.map((column) => (
        <div key={column.id} className="flex-shrink-0 w-72">
          <Card className="h-full">
            <CardHeader className="p-3 pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-medium">{column.title}</CardTitle>
                <span className="rounded-full bg-gray-100 w-6 h-6 flex items-center justify-center text-xs font-medium">
                  {column.tasks.length}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-2 overflow-y-auto max-h-[calc(100vh-220px)]">
              {column.tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
              <Button 
                variant="ghost" 
                className="w-full justify-start text-muted-foreground mt-2"
                size="sm"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add task
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
