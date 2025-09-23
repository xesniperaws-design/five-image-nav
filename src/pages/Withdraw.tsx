import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USDT-TRC20");
  const balance = "0.00";

  return (
    <div className="min-h-screen bg-background">
      <Header title="Withdrawal" />
      
      <div className="p-4">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground mb-6">
          <ArrowLeft className="w-4 h-4" />
        </Link>

        <div className="space-y-6">
          {/* Balance Display */}
          <Card className="p-4 bg-primary text-primary-foreground">
            <div className="text-sm opacity-90 mb-1">Balance (USDT)</div>
            <div className="text-3xl font-bold">{balance}</div>
          </Card>

          {/* Amount Input */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Label className="text-base font-medium">1. Amount</Label>
              <span className="text-sm text-muted-foreground">Minimum: 10 USDT</span>
            </div>
            
            <div className="relative">
              <Input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pr-32 h-14 text-lg"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <span className="text-sm font-medium">USDT</span>
              </div>
            </div>
          </div>

          {/* Currency Selection */}
          <div>
            <Label className="text-base font-medium mb-3 block">2. Select the currency</Label>
            
            <div className="relative">
              <Input
                placeholder="0"
                className="pr-32 h-14 text-lg"
                readOnly
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <span className="text-sm font-medium">USDT-TRC20</span>
                <Button variant="ghost" size="sm" className="p-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Wallet Status */}
          <div className="text-center py-6">
            <div className="text-muted-foreground mb-2">Unbound blockchain wallet</div>
            <Button variant="link" className="text-primary p-0">
              Unbind →
            </Button>
          </div>

          {/* Fees */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Handling fee</span>
              <span className="font-medium">0 USDT-TRC20</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Estimate</span>
              <span className="font-medium text-primary">0 USDT-TRC20</span>
            </div>
          </div>

          {/* Withdraw Button */}
          <Button 
            className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
            disabled={!amount || parseFloat(amount) < 10}
          >
            Withdraw
          </Button>
        </div>
      </div>
    </div>
  );
}