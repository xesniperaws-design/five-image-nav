import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Copy } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USDT-TRC20");

  const handleCopy = () => {
    navigator.clipboard.writeText("TKZvk73ibZwGnLN1ofJ5E7mag9rR6GS8hw");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header title="Recharge" />
      
      <div className="p-4">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground mb-6">
          <ArrowLeft className="w-4 h-4" />
        </Link>

        <div className="space-y-6">
          {/* Amount Input */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Label className="text-base font-medium">1. Enter amount</Label>
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
                <span className="text-sm font-medium">USDT-TRC20</span>
                <Button variant="ghost" size="sm" className="p-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Estimate */}
          <div>
            <Label className="text-base font-medium mb-3 block">2. Estimate</Label>
            
            <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
              <span className="text-2xl font-medium">
                {amount || "0"}
              </span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <span className="text-sm font-medium">USDT</span>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <Card className="p-6 text-center space-y-4">
            <div className="w-48 h-48 mx-auto bg-white p-4 rounded-lg">
              <div className="w-full h-full bg-black flex items-center justify-center text-white text-xs">
                QR CODE
              </div>
            </div>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-foreground break-all">
                  TKZvk73ibZwGnLN1ofJ5E7mag9rR6GS8hw
                </span>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={handleCopy}
                  className="ml-2 flex-shrink-0"
                >
                  <Copy className="w-4 h-4 mr-1" />
                  Copy
                </Button>
              </div>
            </div>
          </Card>

          {/* Upload Certificate */}
          <div>
            <Label className="text-base font-medium mb-3 block">Upload Certificate</Label>
            <Card className="border-dashed border-2 border-border p-8 text-center">
              <div className="text-muted-foreground">
                Click to upload payment screenshot
              </div>
            </Card>
          </div>

          {/* Deposit Button */}
          <Button 
            className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
            disabled={!amount || parseFloat(amount) < 10}
          >
            Deposit
          </Button>
        </div>
      </div>
    </div>
  );
}