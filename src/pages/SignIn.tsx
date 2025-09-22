import { useState } from "react";
import { Eye, EyeOff, Headphones, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default function SignIn() {
  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("+1");

  const countries = [
    { code: "+1", flag: "🇺🇸", name: "United States" },
    { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+86", flag: "🇨🇳", name: "China" },
    { code: "+91", flag: "🇮🇳", name: "India" },
    { code: "+81", flag: "🇯🇵", name: "Japan" },
    { code: "+49", flag: "🇩🇪", name: "Germany" },
    { code: "+33", flag: "🇫🇷", name: "France" },
    { code: "+7", flag: "🇷🇺", name: "Russia" },
    { code: "+82", flag: "🇰🇷", name: "South Korea" },
    { code: "+65", flag: "🇸🇬", name: "Singapore" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div></div>
        <div className="flex gap-4">
          <Headphones className="w-6 h-6 text-navy" />
          <Globe className="w-6 h-6 text-navy" />
        </div>
      </div>

      {/* Welcome Section */}
      <div className="text-center px-8 mt-16 mb-32">
        <h1 className="text-4xl font-bold text-navy mb-4">Welcome to MDEX Pro</h1>
        <p className="text-lg text-navy/80">Open transactions securely anytime, anywhere</p>
      </div>

      {/* Sign In Form */}
      <div className="px-4">
        <Card className="bg-white rounded-t-3xl p-6 min-h-[500px]">
          {/* Tabs */}
          <div className="flex mb-8">
            <button
              onClick={() => setActiveTab("email")}
              className={`flex-1 text-center pb-3 font-medium ${
                activeTab === "email" 
                  ? "text-navy border-b-2 border-amber-400" 
                  : "text-muted-foreground"
              }`}
            >
              Email
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`flex-1 text-center pb-3 font-medium ${
                activeTab === "mobile" 
                  ? "text-navy border-b-2 border-amber-400" 
                  : "text-muted-foreground"
              }`}
            >
              Mobile
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4 mb-8">
            {activeTab === "email" ? (
              <Input
                type="email"
                placeholder="Please enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-gray-50 border-0 rounded-lg"
              />
            ) : (
              <div className="flex gap-2">
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="w-24 h-12 bg-gray-50 border-0 rounded-lg">
                    <SelectValue>
                      <div className="flex items-center gap-1">
                        <span>{countries.find(c => c.code === selectedCountry)?.flag}</span>
                        <span className="text-sm">{selectedCountry}</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        <div className="flex items-center gap-2">
                          <span>{country.flag}</span>
                          <span>{country.code}</span>
                          <span className="text-sm text-muted-foreground">{country.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="tel"
                  placeholder="Please enter mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="flex-1 h-12 bg-gray-50 border-0 rounded-lg"
                />
              </div>
            )}

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Please enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-gray-50 border-0 rounded-lg pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Eye className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Log In Button */}
          <Button className="w-full h-12 bg-amber-400 hover:bg-amber-500 text-navy font-semibold rounded-lg mb-6">
            Log in
          </Button>

          {/* Footer Links */}
          <div className="flex justify-between">
            <button className="text-amber-500 font-medium">Register</button>
            <button className="text-muted-foreground">Forgot password?</button>
          </div>
        </Card>
      </div>
    </div>
  );
}