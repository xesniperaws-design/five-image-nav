import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Understanding your digital footprint and its impacts",
      image: "/api/placeholder/120/80",
      category: "Technology"
    },
    {
      id: 2,
      title: "Discovering the hidden layers of the internet",
      image: "/api/placeholder/120/80",
      category: "Security"
    },
    {
      id: 3,
      title: "Cyber safety as a crucial life skill initiative",
      image: "/api/placeholder/120/80",
      category: "Education"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="MDEX Pro" />
      
      <div className="relative">
        {/* Hero Banner */}
        <div className="relative h-64 bg-gradient-to-r from-orange-600 to-orange-400 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">
              <span className="text-primary">MDEX Pro</span> News
            </h1>
            <p className="text-sm opacity-90 leading-relaxed max-w-sm">
              Focus on market trends, economic data, and investment trends, analyzing financial situations.
            </p>
          </div>
          
          {/* Background cityscape effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>

      <div className="p-4 space-y-4 -mt-4 relative z-20">
        {newsItems.map((item) => (
          <Card key={item.id} className="p-4 hover:bg-muted/50 transition-colors">
            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground leading-snug mb-2">
                  {item.title}
                </h3>
                <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
              <div className="w-20 h-16 bg-muted rounded-lg flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 rounded-lg"></div>
              </div>
            </div>
          </Card>
        ))}

        {/* Additional news items for scrolling */}
        <Card className="p-4 hover:bg-muted/50 transition-colors">
          <div className="flex gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground leading-snug mb-2">
                Market Analysis: Cryptocurrency trends for Q4 2024
              </h3>
              <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                Analysis
              </span>
            </div>
            <div className="w-20 h-16 bg-muted rounded-lg flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg"></div>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:bg-muted/50 transition-colors">
          <div className="flex gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground leading-snug mb-2">
                AI Trading: The future of automated investment strategies
              </h3>
              <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                AI & Tech
              </span>
            </div>
            <div className="w-20 h-16 bg-muted rounded-lg flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg"></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}