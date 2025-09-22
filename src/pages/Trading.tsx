import { useState } from "react";
import { Header } from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { InstantSpotTrading } from "@/components/InstantSpotTrading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Clock } from "lucide-react";
import { BottomNavigation } from "@/components/BottomNavigation";

export default function Trading() {
  const [activeTradeType, setActiveTradeType] = useState("contract");
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Trading" />
      
      <div className="p-4 space-y-6">
        {/* Trading Types */}
        <div className="flex gap-2">
          <Button 
            variant={activeTradeType === "contract" ? "default" : "outline"} 
            className="flex-1"
            onClick={() => setActiveTradeType("contract")}
          >
            Contract
          </Button>
          <Button 
            variant={activeTradeType === "option" ? "default" : "outline"} 
            className="flex-1"
            onClick={() => setActiveTradeType("option")}
          >
            Option
          </Button>
          <Button 
            variant={activeTradeType === "instant" ? "default" : "outline"} 
            className="flex-1 bg-primary text-primary-foreground"
            onClick={() => setActiveTradeType("instant")}
          >
            Instant Spot Trading
          </Button>
        </div>

        {activeTradeType === "instant" ? (
          <InstantSpotTrading />
        ) : (
          <>
            {/* Balance Section */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Balance</p>
                <p className="text-2xl font-bold">0.00</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">Assets</p>
                <p className="text-2xl font-bold">0.00</p>
              </div>
            </div>

            {/* Profit Section */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Daily Profit</p>
                <p className="text-lg font-semibold text-success">+0.00</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">Total Profit</p>
                <p className="text-lg font-semibold text-success">+0.00</p>
              </div>
            </div>

            {/* Trading Button */}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4">
              Trading Now
            </Button>

            {/* Positions/History Tabs */}
            <Tabs defaultValue="positions" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="positions" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Positions
                </TabsTrigger>
                <TabsTrigger value="history" className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Historical Order
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="positions" className="mt-6">
                <Card className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                    <FileText className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">Empty</p>
                </Card>
              </TabsContent>
              
              <TabsContent value="history" className="mt-6">
                <Card className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                    <Clock className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">No historical orders</p>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
      <BottomNavigation />  
    </div>
  );
}