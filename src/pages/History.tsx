import { Header } from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Package } from "lucide-react";
import { Link } from "react-router-dom";

export default function History() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="History" />
      
      <div className="p-4">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground mb-6">
          <ArrowLeft className="w-4 h-4" />
        </Link>

        <Tabs defaultValue="recharge" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted">
            <TabsTrigger 
              value="recharge" 
              className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Recharge order
            </TabsTrigger>
            <TabsTrigger 
              value="withdrawal"
              className="data-[state=active]:bg-background data-[state=active]:text-foreground"
            >
              Withdrawal order
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="recharge" className="mt-8">
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center mb-4">
                <Package className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">!</span>
              </div>
              <p className="text-muted-foreground text-lg">Nothing at all</p>
            </div>
          </TabsContent>
          
          <TabsContent value="withdrawal" className="mt-8">
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center mb-4">
                <Package className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">!</span>
              </div>
              <p className="text-muted-foreground text-lg">Nothing at all</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}