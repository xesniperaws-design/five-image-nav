import { useState } from "react";
import { ChevronLeft, Eye, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("0.00");
  const [selectedCurrency, setSelectedCurrency] = useState("BTC");

  const currencies = [
    { symbol: "BTC", name: "Bitcoin", color: "bg-orange-500" },
    { symbol: "ETH", name: "Ethereum", color: "bg-blue-500" },
    { symbol: "DOT", name: "Polkadot", color: "bg-purple-500" },
    { symbol: "EOS", name: "EOS", color: "bg-gray-500" },
    { symbol: "TRX", name: "Tron", color: "bg-red-500" }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="flex items-center p-4 bg-card border-b border-border">
        <ChevronLeft 
          className="w-6 h-6 text-foreground mr-3 cursor-pointer" 
          onClick={() => navigate("/ai")}
        />
        <h1 className="text-lg font-bold text-foreground">Create</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Main Trading Chart Background */}
        <div className="relative h-48 bg-gradient-to-br from-navy-light to-navy rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/50 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <Card className="p-4 space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-border">
            <span className="text-muted-foreground">Product</span>
            <span className="font-semibold">A1</span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-b border-border">
            <span className="text-muted-foreground">Days</span>
            <span className="font-semibold">1 Day</span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-b border-border">
            <span className="text-muted-foreground">Level</span>
            <span className="font-semibold">Lv≥1</span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-b border-border">
            <span className="text-muted-foreground">Limited</span>
            <span className="font-semibold">51</span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-b border-border">
            <span className="text-muted-foreground">Daily Rate</span>
            <span className="font-semibold text-success">0.90%</span>
          </div>
          
          <div className="py-3">
            <p className="text-muted-foreground mb-3">Currency</p>
            <div className="flex gap-2">
              {currencies.map((currency) => (
                <button
                  key={currency.symbol}
                  onClick={() => setSelectedCurrency(currency.symbol)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold ${currency.color} ${
                    selectedCurrency === currency.symbol ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
                  }`}
                >
                  {currency.symbol === "BTC" ? "₿" : 
                   currency.symbol === "ETH" ? "Ξ" :
                   currency.symbol === "DOT" ? "●" :
                   currency.symbol === "EOS" ? "E" : "T"}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Hosting Amount */}
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Hosting Amount</span>
            <span className="text-sm text-muted-foreground">Limit: 100-49999</span>
          </div>
          
          <div className="relative mb-4">
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-2xl font-bold h-16 pr-20"
              placeholder="0.00"
            />
            <Button 
              variant="secondary" 
              className="absolute right-2 top-2 h-12 px-6"
              onClick={() => setAmount("49999")}
            >
              MAX
            </Button>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-xs text-background">₮</span>
            </div>
            <span className="text-sm text-muted-foreground">Balance: 0.00 USDT</span>
          </div>
        </Card>

        {/* Info Points */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Check className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Income will be automatically sent to your balance account;</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Check className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Your funds are not at risk;</span>
          </div>
        </div>

        {/* Create Order Button */}
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg font-semibold">
          Create an order
        </Button>
      </div>
    </div>
  );
}