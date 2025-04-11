
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RecentTasks } from "@/components/dashboard/RecentTasks";
import { TaskStats } from "@/components/dashboard/TaskStats";
import { TaskSummary } from "@/components/dashboard/TaskSummary";
import { Plus } from "lucide-react";

export default function TaskDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Task Dashboard</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>

      <div className="pb-4">
        <TaskSummary />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <TaskStats />
        </div>
        <div className="lg:col-span-2">
          <RecentTasks />
        </div>
      </div>
    </div>
  );
}
