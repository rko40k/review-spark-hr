
import { Button } from "@/components/ui/button";
import { KanbanBoard } from "@/components/kanban/KanbanBoard";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

export default function KanbanPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Development Board</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>
      
      <div className="flex space-x-2 max-w-md">
        <Input placeholder="Search tasks..." className="w-full" />
        <Button variant="ghost" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      
      <KanbanBoard />
    </div>
  );
}
