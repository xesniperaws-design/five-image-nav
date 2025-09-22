import { Header } from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { MarketDynamics } from "@/components/MarketDynamics";
import { IEOMarket } from "@/components/IEOMarket";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Users, Zap } from "lucide-react";
import { BottomNavigation } from "@/components/BottomNavigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="MDEX Pro" subtitle="Trusted by millions" />
      
      <div className="p-4 space-y-6">
        {/* Hero Section */}
        <Card className="p-6 bg-gradient-to-br from-navy-light to-navy relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-foreground mb-2">
              MDEX Pro are powered by the MDEX Pro protocol
            </h2>
            <p className="text-muted-foreground mb-4">
              Trusted by millions
            </p>
            
            <div className="flex items-center justify-center my-6">
              <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center relative">
                <Shield className="w-16 h-16 text-primary" />
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
              </div>
            </div>
            
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Register
            </Button>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            title="24h trading volume"
            value="$63,336,214"
          />
          <StatCard
            title="Listed cryptocurrencies"
            value="350+"
          />
          <StatCard
            title="Partner organizations"
            value="1000+"
          />
          <StatCard
            title="Lowest transaction fees"
            value="0.01%"
          />
        </div>

        {/* AI Arbitrage Feature */}
        <Card className="p-6 bg-primary/10 border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-foreground">AI Arbitrage</h3>
              <p className="text-sm text-muted-foreground">
                Generate passive income daily and earn rewards
              </p>
            </div>
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <Button variant="secondary" className="w-full">
            Start
          </Button>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-2">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-center">Financial security</span>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-primary" />
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
        
        {/* Market Dynamics Section */}
        <MarketDynamics />
        
        {/* Start Cryptocurrency Journey */}
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Start your cryptocurrency journey
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Reliable security</h3>
          <p className="text-muted-foreground">
            Our advanced security measures and SAFU fund protect your digital assets from all risks.
          </p>
        </Card>
        
        {/* IEO Market Section */}
        <IEOMarket />
      </div>
      <BottomNavigation />
    </div>
  );
}