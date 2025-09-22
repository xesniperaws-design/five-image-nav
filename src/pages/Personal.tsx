import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight, 
  Gift, 
  RefreshCw, 
  TrendingUp, 
  DollarSign, 
  Zap, 
  MessageCircle, 
  Clock, 
  User, 
  Shield, 
  CreditCard, 
  Lock
} from "lucide-react";

export default function Personal() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Personal" />
      
      <div className="p-4 space-y-6">
        {/* Profile Section */}
        <Card className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-navy-light rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-primary rounded-full text-primary-foreground text-lg font-bold flex items-center justify-center">
                M
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold">abu****.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  Credit 51
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-500">
                  Lv1
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">UID: 8881149</p>
            </div>
          </div>

          {/* Balance Section */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-1">Balance</p>
            <p className="text-3xl font-bold text-foreground">0.00</p>
            <p className="text-sm text-muted-foreground">Assets: 0.00</p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Withdrawal
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Recharge
            </Button>
          </div>
        </Card>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-4 gap-3">
          <div className="flex flex-col items-center p-3 bg-card rounded-xl border border-border">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-2">
              <Gift className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-center">Welfare</span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-card rounded-xl border border-border">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-2">
              <RefreshCw className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-center">Sim Trade</span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-card rounded-xl border border-border">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-center">Level</span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-card rounded-xl border border-border">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-2">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-center">Notify</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <div className="flex flex-col items-center p-3 bg-card rounded-xl border border-border">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-2">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-center">Lending</span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-card rounded-xl border border-border">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-2">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-center">Fast trade</span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-card rounded-xl border border-border">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-2">
              <User className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-center">Invite</span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-card rounded-xl border border-border">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-2">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-center">Live Chat</span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium">History</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-primary" />
                <span className="font-medium">Personal information</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-medium">Advanced Identity Authentication</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-primary" />
                <span className="font-medium">Bind Blockchain Address</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-primary" />
                <span className="font-medium">Change Login Password</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}