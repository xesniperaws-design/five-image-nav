import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronDown, ArrowUpDown, AlertCircle, Calculator } from "lucide-react";

export function InstantSpotTrading() {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-card border-border">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-foreground">Cryptocurrency</h3>
          <div className="text-sm text-muted-foreground">
            Available: <span className="text-primary">0 USDT</span>
          </div>
        </div>
        
        <div className="space-y-6">
          {/* Issued Section */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Issued</span>
              <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-lg">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <span className="text-foreground font-medium">USDT</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div className="text-2xl font-bold text-foreground">0.00</div>
          </div>
          
          {/* Swap Icon */}
          <div className="flex justify-center">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <ArrowUpDown className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
          
          {/* Obtained Section */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Obtained</span>
              <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-lg">
                <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center">
                  <span className="text-background text-xs font-bold">♦</span>
                </div>
                <span className="text-foreground font-medium">ETH</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div className="text-2xl font-bold text-foreground">0</div>
          </div>
          
          {/* Trade Rate */}
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-amber-800">
              Trade rate: 1 USDT ≈ 0.000238 ETH
            </span>
          </div>
          
          {/* Trade Button */}
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-lg font-semibold">
            Trade
          </Button>
        </div>
      </Card>
      
      {/* Balance Section */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Balance</h3>
          <Calculator className="w-5 h-5 text-muted-foreground" />
        </div>
        
        <div className="border-b border-primary w-16 mb-4"></div>
        
        <p className="text-sm text-muted-foreground mb-6">
          *Only display currencies with assets
        </p>
        
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center opacity-50">
            <div className="w-12 h-8 bg-muted-foreground/20 rounded"></div>
          </div>
          <p className="text-muted-foreground">Nothing at all</p>
        </div>
      </Card>
    </div>
  );
}