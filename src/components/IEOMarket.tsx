import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const cryptoData = [
  { name: "BTC", icon: "₿", price: "112,820.93", change: "+0.34%", positive: true },
  { name: "ETH", icon: "♦", price: "4,188.99", change: "+0.23%", positive: true },
  { name: "LTC", icon: "Ł", price: "105.98", change: "+0.84%", positive: true },
  { name: "BNB", icon: "◆", price: "1,024.44", change: "+0.18%", positive: true },
  { name: "TRX", icon: "▲", price: "0.3404", change: "+1.7%", positive: true },
  { name: "DOGE", icon: "Ð", price: "0.24073", change: "+1.67%", positive: true },
  { name: "BCH", icon: "₿", price: "572", change: "+0.47%", positive: true },
  { name: "APT", icon: "🅰", price: "4.272", change: "+0.3%", positive: true },
];

export function IEOMarket() {
  return (
    <Card className="p-6 bg-card border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6 text-center">IEO Market</h2>
      
      <Tabs defaultValue="popular" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="popular" className="bg-primary text-primary-foreground data-[state=active]:bg-primary">
            Popular
          </TabsTrigger>
          <TabsTrigger value="subscribe" className="bg-muted text-muted-foreground">
            Subscribe
          </TabsTrigger>
          <TabsTrigger value="lottery" className="bg-muted text-muted-foreground">
            Lottery
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="popular">
          <div className="space-y-4">
            <div className="flex gap-2 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search" 
                  className="pl-10 bg-muted border-border"
                />
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Search
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card className="p-4 bg-primary/20 border-primary/30 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">₿</span>
                  <span className="text-2xl">🥇</span>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">BTC</div>
                  <div className="text-xl font-bold text-foreground">$112,820.93</div>
                  <div className="text-success text-sm">+0.34%</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card border-border rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">♦</span>
                  <span className="text-2xl">🥇</span>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">ETH</div>
                  <div className="text-xl font-bold text-foreground">$4,188.99</div>
                  <div className="text-success text-sm">+0.23%</div>
                </div>
              </Card>
            </div>
            
            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-muted-foreground mb-4">
              <div>Name</div>
              <div>Price</div>
              <div>Chart</div>
              <div>24-hour change</div>
            </div>
            
            {cryptoData.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 items-center py-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
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
        
        <TabsContent value="subscribe">
          <div className="text-center text-muted-foreground py-8">
            Subscription options coming soon
          </div>
        </TabsContent>
        
        <TabsContent value="lottery">
          <div className="text-center text-muted-foreground py-8">
            Lottery features coming soon
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}