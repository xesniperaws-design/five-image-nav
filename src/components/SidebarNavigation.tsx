import { X, User, Shield, Globe, TrendingUp, DollarSign, Coins, Zap, CreditCard, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SidebarNavigationProps {
  onClose: () => void;
}

export function SidebarNavigation({ onClose }: SidebarNavigationProps) {
  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-navy-light rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-primary rounded text-primary-foreground text-sm font-bold flex items-center justify-center">
              M
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">abu****.com</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary" className="text-xs">Credit 51</Badge>
              <Badge variant="outline" className="text-xs">Lv1</Badge>
            </div>
            <div className="text-xs text-muted-foreground">UID: 8881149</div>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Navigation Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Main Navigation */}
        <div className="p-4 space-y-2">
          <Link to="/" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
            <HomeIcon className="w-5 h-5 text-muted-foreground" />
            <span className="text-foreground">Home</span>
          </Link>
          
          <Link to="/personal-info" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
            <User className="w-5 h-5 text-muted-foreground" />
            <span className="text-foreground">KYC</span>
          </Link>
          
          <Link to="/personal-info" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
            <Shield className="w-5 h-5 text-muted-foreground" />
            <span className="text-foreground">User Center</span>
          </Link>
          
          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Language</span>
            </div>
            <span className="text-sm text-muted-foreground">English</span>
          </div>
        </div>

        {/* Market Section */}
        <div className="px-4">
          <div className="text-sm font-medium text-muted-foreground mb-2 px-3">Market</div>
          <div className="space-y-2">
            <Link to="/trading" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
              <TrendingUp className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Market dynamics</span>
            </Link>
            
            <Link to="/trading" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
              <DollarSign className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Forex</span>
            </Link>
            
            <Link to="/trading" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
              <Coins className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Crypto</span>
            </Link>
            
            <Link to="/trading" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
              </div>
              <span className="text-foreground">GOLD</span>
            </Link>
          </div>
        </div>

        {/* Finance Section */}
        <div className="px-4 mt-6">
          <div className="text-sm font-medium text-muted-foreground mb-2 px-3">Finance</div>
          <div className="space-y-2">
            <Link to="/trading" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
              <TrendingUp className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">IEO</span>
            </Link>
            
            <Link to="/trading" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
              <Zap className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Fast trade</span>
            </Link>
            
            <Link to="/ai" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
              <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
                <Zap className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-foreground">AI Arbitrage</span>
            </Link>
            
            <Link to="/deposit" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
              <CreditCard className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Deposit</span>
            </Link>
            
            <Link to="/withdraw" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
              <CreditCard className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Withdraw</span>
            </Link>
            
            <Link to="/history" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
              <Shield className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">History</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}