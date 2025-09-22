import { Header } from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ArrowRight, Wallet, Shield, Zap, DollarSign, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AI() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="flex items-center p-4 bg-card border-b border-border">
        <ChevronLeft className="w-6 h-6 text-foreground mr-3" />
        <div className="flex-1">
          <h1 className="text-lg font-bold text-foreground">AI Arbitrage</h1>
        </div>
      </div>
      
      <div className="p-4 space-y-6">
        {/* Daily Income Card */}
        <Card className="p-6 bg-gradient-to-br from-navy-light to-navy border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Daily income</p>
              <p className="text-3xl font-bold text-foreground">0.00</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <ArrowRight className="w-5 h-5 text-foreground" />
            </div>
          </div>
          <p className="text-right text-sm text-primary">Hosting &gt;</p>
        </Card>

        {/* Income Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Daily income</p>
            <p className="text-lg font-semibold text-primary">0.00</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-1">Total income</p>
            <p className="text-lg font-semibold text-primary">0.00</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-2">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-center">Financial security</span>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-2">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-center">Stable income</span>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-center">Easy to use</span>
          </div>
        </div>

        {/* Description */}
        <Card className="p-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI quantification is a program that uses complex algorithms and computer programming techniques to automatically implement investment behaviors. It can execute trades according to preset logic and generate passive income.
          </p>
          <Button variant="ghost" className="mt-2 p-0 h-auto text-primary">
            Expand <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Card>

        {/* Product Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Product</h3>
          
          {/* A1 Product */}
          <Card className="p-4 mb-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">A1</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground">Days</span>
                    <span className="font-semibold">1</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground">Daily Rate</span>
                    <span className="font-semibold text-success">0.90%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Limit</span>
                    <span className="font-semibold">100-49,999</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 mb-4">
              <Badge variant="secondary" className="bg-orange-500/20 text-orange-500">BTC</Badge>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-500">ETH</Badge>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-500">DOT</Badge>
              <Badge variant="secondary" className="bg-green-500/20 text-green-500">ADA</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">TRX</Badge>
            </div>
            
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Hosting Now
            </Button>
          </Card>

          {/* S3 Product */}
          <Card className="p-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">S3</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground">Days</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground">Daily Rate</span>
                    <span className="font-semibold text-success">1.10%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Limit</span>
                    <span className="font-semibold">20,000-99,999</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}