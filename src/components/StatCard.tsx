import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  className?: string;
  icon?: ReactNode;
  variant?: "default" | "primary";
}

export function StatCard({ 
  title, 
  value, 
  subtitle, 
  className, 
  icon,
  variant = "default" 
}: StatCardProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-xl border",
        variant === "primary" 
          ? "bg-primary/10 border-primary/20" 
          : "bg-card border-border",
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-muted-foreground">{title}</p>
        {icon}
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      {subtitle && (
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      )}
    </div>
  );
}