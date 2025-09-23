import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarNavigation } from "@/components/SidebarNavigation";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

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
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="p-1">
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 p-0">
          <SidebarNavigation onClose={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>
    </header>
  );
}