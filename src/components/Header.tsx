import { Menu } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 bg-card border-b border-border">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-navy-light rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-primary rounded text-primary-foreground text-sm font-bold flex items-center justify-center">
            M
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">{title}</h1>
          {subtitle && <p className="text-sm text-primary">{subtitle}</p>}
        </div>
      </div>
      <Menu className="w-6 h-6 text-primary" />
    </header>
  );
}