import { NavLink, useNavigate } from "react-router-dom";
import { Home, TrendingUp, Bot, Newspaper, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { isLoggedIn } from "@/lib/auth";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/trading", icon: TrendingUp, label: "Trading" },
  { to: "/ai", icon: Bot, label: "AI" },
  { to: "/news", icon: Newspaper, label: "News" },
  { to: "/personal", icon: User, label: "Personal" },
];

export function BottomNavigation() {
  const navigate = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    const anchor = e.currentTarget as HTMLAnchorElement;
    const to = anchor.getAttribute("href") || "/";
    
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={handleClick}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all duration-200",
                "text-muted-foreground hover:text-foreground",
                isActive && "text-primary bg-primary/10"
              )
            }
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}