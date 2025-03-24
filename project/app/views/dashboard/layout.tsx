"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  UserCircle, 
  BriefcaseIcon, 
  Settings, 
  Search,
  LayoutDashboard
} from "lucide-react";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "My Profile",
    href: "/dashboard/profile",
    icon: UserCircle
  },
  {
    title: "Applied Jobs",
    href: "/dashboard/applied",
    icon: BriefcaseIcon
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings
  }
];

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background transition-transform",
        !isSidebarOpen && "-translate-x-full"
      )}>
        <div className="flex h-16 items-center border-b px-6">
          <BriefcaseIcon className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">JobSeek</span>
        </div>
        <div className="py-4">
          <nav className="space-y-1 px-3">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className={cn(
        "transition-all duration-300",
        isSidebarOpen ? "pl-64" : "pl-0"
      )}>
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}