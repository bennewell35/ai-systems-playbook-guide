
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Rocket,
  Lightbulb,
  Wrench,
  Users,
  FileText,
  CircleHelp,
  Trophy,
  Sparkles,
  Code2,
  MessageCircleHeart,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const navItems = [
  { id: "hero", label: "Home", icon: Rocket },
  { id: "workflow", label: "AI Workflows", icon: Wrench },
  { id: "templates", label: "Templates", icon: FileText },
  { id: "pro-tips", label: "Pro Tips", icon: Lightbulb },
  { id: "faq", label: "FAQ/Glossary", icon: CircleHelp },
  { id: "case-study", label: "Case Study", icon: Users },
  { id: "motivation", label: "You Got This!", icon: MessageCircleHeart },
  { id: "how-i-built-this", label: "How I Built This", icon: Code2 },
  { id: "connect", label: "Connect", icon: Rocket },
  // Moved remix/why-this-wins (bottom of page, not in sidebar, to reduce visual clutter)
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  // Helper: Determine if nav item is active (based on current hash)
  const currentHash = location.hash.replace("#", "");
  const isActive = (id: string) => currentHash === id;

  return (
    <Sidebar
      className={`transition-all duration-200 ${
        collapsed
          ? "w-16 bg-muted/70 border-r border-border"
          : "w-56 bg-gradient-to-b from-background via-muted to-background border-r border-border"
      } shadow-lg z-30`}
      collapsible="offcanvas"
    >
      <SidebarTrigger className="m-3 self-end" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-accent tracking-widest uppercase pb-2 pl-2 opacity-70">
            Navigation
          </SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton asChild>
                  <a
                    href={`#${item.id}`}
                    className={`
                      flex items-center rounded-xl px-2 py-2 gap-2 transition-all
                      group
                      ${collapsed ? "justify-center" : ""}
                      ${
                        isActive(item.id)
                          ? "bg-accent/20 text-accent font-bold shadow-sm"
                          : "hover:bg-accent/10 hover:text-accent/90"
                      }
                    `}
                  >
                    <item.icon
                      size={collapsed ? 26 : 22}
                      className={`shrink-0 ${
                        isActive(item.id)
                          ? "text-accent"
                          : "text-accent/70 group-hover:text-accent"
                      }`}
                    />
                    {!collapsed && (
                      <span
                        className={`truncate text-base font-medium`}
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {item.label}
                      </span>
                    )}
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
