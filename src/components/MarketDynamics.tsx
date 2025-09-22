import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";

const forexData = [
  { name: "GBPUSD", flag: "🇬🇧", price: "1.35072", change: "+0.2%", positive: true },
  { name: "EURUSD", flag: "🇪🇺", price: "1.17814", change: "+0.28%", positive: true },
  { name: "AUDUSD", flag: "🇦🇺", price: "0.65942", change: "+0.22%", positive: true },
  { name: "USDJPY", flag: "🇺🇸", price: "147.787", change: "-0.19%", positive: false },
  { name: "NZDUSD", flag: "🇳🇿", price: "0.58618", change: "+0.28%", positive: true },
  { name: "USDTHB", flag: "🇺🇸", price: "31.777", change: "-0.1%", positive: false },
  { name: "USDCNH", flag: "🇺🇸", price: "7.11506", change: "-0.06%", positive: false },
  { name: "USDCAD", flag: "🇺🇸", price: "1.3803", change: "-0.06%", positive: false },
];

export function MarketDynamics() {
  return (
    <Card className="p-6 bg-card border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Market dynamics</h2>
      
      <Tabs defaultValue="forex" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="forex" className="bg-primary text-primary-foreground data-[state=active]:bg-primary">
            Forex
          </TabsTrigger>
          <TabsTrigger value="crypto" className="bg-muted text-muted-foreground">
            Crypto
          </TabsTrigger>
          <TabsTrigger value="gold" className="bg-muted text-muted-foreground">
            GOLD
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="forex">
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-muted-foreground mb-4">
              <div>Name</div>
              <div>Price</div>
              <div>Chart</div>
              <div>24-hour change</div>
            </div>
            
            {forexData.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 items-center py-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{item.flag}</span>
                  <span className="text-foreground font-medium">{item.name}</span>
                </div>
                <div className="text-foreground font-medium">{item.price}</div>
                <div className="w-16 h-8 bg-muted rounded flex items-center justify-center">
                  <div className={`w-12 h-4 rounded-sm ${item.positive ? 'bg-success' : 'bg-destructive'} opacity-60`}></div>
                </div>
                <div className={`font-medium ${item.positive ? 'text-success' : 'text-destructive'}`}>
                  {item.change}
                </div>
              </div>
            ))}
            
            <div className="flex justify-between items-center mt-6 pt-4">
              <Button variant="ghost" size="sm" className="text-primary">
                <ChevronLeft className="w-4 h-4" />
                <ChevronLeft className="w-4 h-4 -ml-2" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary">
                <ChevronRight className="w-4 h-4" />
                <ChevronRight className="w-4 h-4 -ml-2" />
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="crypto">
          <div className="text-center text-muted-foreground py-8">
            Crypto market data coming soon
          </div>
        </TabsContent>
        
        <TabsContent value="gold">
          <div className="text-center text-muted-foreground py-8">
            Gold market data coming soon
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}