import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MarketItem = {
  name: string;
  icon?: string;
  price: string;
  change: string;
  positive: boolean;
};

const COINGECKO_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true";

const FOREX_PAIRS: string[] = [
  "EURGBP",
  "USDJPY",
  "EURUSD",
  "GBPUSD",
  "AUDUSD",
  "USDCHF",
  "NZDUSD",
  "USDCAD",
  "USDZAR",
];

const FOREX_URL = `https://www.freeforexapi.com/api/live?pairs=${FOREX_PAIRS.join(",")}`;

export function MarketDynamics() {
  const [forexData, setForexData] = useState<MarketItem[]>([]);
  const [cryptoData, setCryptoData] = useState<MarketItem[]>([]);

  useEffect(() => {
    async function load() {
      try {
        // Fetch both forex and crypto in parallel
        const [forexRes, cryptoRes] = await Promise.all([
          fetch(FOREX_URL),
          fetch(COINGECKO_URL),
        ]);

        // Handle Forex
        let forexItems: MarketItem[] = [];
        if (forexRes.ok) {
          const forexJson = await forexRes.json();
          const rates = forexJson?.rates ?? {};
          forexItems = FOREX_PAIRS.map((pair) => {
            const rate = rates[pair]?.rate;
            return {
              name: pair,
              price: rate !== undefined ? String(rate) : "-",
              change: "-",
              positive: true,
            } as MarketItem;
          });
        }

        // Handle Crypto
        let cryptoItems: MarketItem[] = [];
        if (cryptoRes.ok) {
          const json = await cryptoRes.json();
          cryptoItems = [
            {
              name: "BTCUSD",
              icon: "₿",
              price: json.bitcoin?.usd !== undefined ? String(json.bitcoin.usd) : "-",
              change:
                json.bitcoin?.usd_24h_change !== undefined
                  ? `${Number(json.bitcoin.usd_24h_change).toFixed(2)}%`
                  : "-",
              positive: Number(json.bitcoin?.usd_24h_change ?? 0) >= 0,
            },
            {
              name: "ETHUSD",
              icon: "Ξ",
              price: json.ethereum?.usd !== undefined ? String(json.ethereum.usd) : "-",
              change:
                json.ethereum?.usd_24h_change !== undefined
                  ? `${Number(json.ethereum.usd_24h_change).toFixed(2)}%`
                  : "-",
              positive: Number(json.ethereum?.usd_24h_change ?? 0) >= 0,
            },
          ];
        }

        setForexData(forexItems);
        setCryptoData(cryptoItems);
      } catch (e) {
        // Silently ignore errors for now
        setForexData([]);
        setCryptoData([]);
      }
    }
    load();
    // Optionally refresh periodically:
    // const t = setInterval(load, 60_000);
    // return () => clearInterval(t);
  }, []);
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
            <div className="grid grid-cols-4 gap-5 text-sm font-medium text-muted-foreground mb-4">
              <div>Name</div>
              <div className="ml-2">Price</div>
              <div>Chart</div>
              <div>24-hour change</div>
            </div>
            
            {(forexData.length ? forexData : []).map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 items-center py-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{item.icon ?? ""}</span>
                  <span className="text-foreground text-[12px]">{item.name}</span>
                </div>
                <div className="text-foreground ml-2 font-medium text-[12px]">{item.price}</div>
                <div className="w-16 h-8 bg-muted rounded flex items-center justify-center">
                  <div className={`w-12 h-4 rounded-sm ${item.positive ? 'bg-success' : 'bg-destructive'} opacity-60`}></div>
                </div>
                <div className={`font-medium ${item.positive ? 'text-success' : 'text-destructive'}`}>
                  {item.change}
                </div>
              </div>
            ))}
            {!forexData.length && (
              <div className="text-center text-muted-foreground py-4 text-sm">Loading market data...</div>
            )}
            
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
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-5 text-sm font-medium text-muted-foreground mb-4">
              <div>Name</div>
              <div className="ml-2">Price</div>
              <div>Chart</div>
              <div>24-hour change</div>
            </div>

            {(cryptoData.length ? cryptoData : []).map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 items-center py-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{item.icon ?? ""}</span>
                  <span className="text-foreground text-[12px]">{item.name}</span>
                </div>
                <div className="text-foreground ml-2 font-medium text-[12px]">{item.price}</div>
                <div className="w-16 h-8 bg-muted rounded flex items-center justify-center">
                  <div className={`w-12 h-4 rounded-sm ${item.positive ? 'bg-success' : 'bg-destructive'} opacity-60`}></div>
                </div>
                <div className={`font-medium ${item.positive ? 'text-success' : 'text-destructive'}`}>
                  {item.change}
                </div>
              </div>
            ))}

            {!cryptoData.length && (
              <div className="text-center text-muted-foreground py-4 text-sm">Loading crypto data...</div>
            )}
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