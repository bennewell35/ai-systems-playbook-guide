
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Rocket, Lightbulb, Wrench, Users, FileText, CircleHelp, Trophy, Sparkles, Code2, MessageCircleHeart } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { id: "hero", label: "Home", icon: Rocket },
  { id: "why-this-wins", label: "Why This Wins", icon: Trophy },
  { id: "remix", label: "Remix Guide", icon: Sparkles },
  { id: "workflow", label: "AI Workflows", icon: Wrench },
  { id: "templates", label: "Templates", icon: FileText },
  { id: "pro-tips", label: "Pro Tips", icon: Lightbulb },
  { id: "faq", label: "FAQ/Glossary", icon: CircleHelp },
  { id: "case-study", label: "Case Study", icon: Users },
  { id: "motivation", label: "You Got This!", icon: MessageCircleHeart },
  { id: "how-i-built-this", label: "How I Built This", icon: Code2 },
  { id: "connect", label: "Connect", icon: Rocket },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  // doesn't need router highlighting—scrolls to anchor
  return (
    <Sidebar className={collapsed ? "w-14" : "w-52"} collapsible="offcanvas">
      <SidebarTrigger className="m-2 self-end" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Playbook</SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map(item => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton asChild>
                  <a
                    href={`#${item.id}`}
                    className={`flex items-center py-2 rounded-lg px-3 transition-colors ${collapsed ? "justify-center" : ""}`}
                    tabIndex={0}
                  >
                    <item.icon size={22} className="mr-0 md:mr-2 text-primary" />
                    {!collapsed && <span className="text-base font-bold">{item.label}</span>}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
