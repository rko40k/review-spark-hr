
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem 
} from "@/components/ui/sidebar";
import { BarChart3, Calendar, ClipboardList, Home, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Employees", icon: Users, path: "/employees" },
  { title: "Reviews", icon: ClipboardList, path: "/reviews" },
  { title: "Calendar", icon: Calendar, path: "/calendar" },
  { title: "Reports", icon: BarChart3, path: "/reports" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="py-6 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-hr-blue rounded-md p-1">
            <BarChart3 className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl text-sidebar-foreground">
            ReviewSpark
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.path}
                      className={cn(
                        "flex items-center gap-3 text-sidebar-foreground/80 hover:text-sidebar-foreground",
                        window.location.pathname === item.path && "text-sidebar-foreground font-medium"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
