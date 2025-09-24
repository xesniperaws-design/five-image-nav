import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Headphones, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignUp() {
  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invitationCode, setInvitationCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("+1");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onRegister = async () => {
    setError(null);
    setLoading(true);
    
    try {
      // Basic validation
      if (activeTab === "email") {
        if (!email.trim()) throw new Error("Please enter email");
        if (!/\S+@\S+\.\S+/.test(email)) throw new Error("Please enter a valid email");
      } else {
        if (!mobile.trim()) throw new Error("Please enter mobile number");
      }
      
      if (!password) throw new Error("Please enter password");
      if (password.length < 6) throw new Error("Password must be at least 6 characters");
      if (password !== confirmPassword) throw new Error("Passwords do not match");
      if (!agreedToTerms) throw new Error("Please agree to the User Agreement");

      // Here you would typically make an API call to register the user
      // For now, we'll just simulate success and redirect to signin
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate("/signin");
    } catch (e: any) {
      setError(e?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

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
      <div className="text-center px-8 mb-16">
        <h1 className="text-4xl font-bold text-navy mb-4">Welcome to MDEX Pro</h1>
        <p className="text-lg text-navy/80">Open transactions securely anytime, anywhere</p>
      </div>

      {/* Sign Up Form */}
      <div>
        <Card className="bg-white rounded-t-3xl p-6 min-h-[600px]">
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
          <div className="space-y-4 mb-6">
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
                        <span className="text-sm text-black">{selectedCountry}</span>
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

            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Please enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-12 bg-gray-50 border-0 rounded-lg pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Eye className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            </div>

            <Input
              type="text"
              placeholder="Invitation code (optional)"
              value={invitationCode}
              onChange={(e) => setInvitationCode(e.target.value)}
              className="h-12 bg-gray-50 border-0 rounded-lg"
            />
          </div>

          {/* Terms Agreement */}
          <div className="flex items-center space-x-2 mb-6">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              I have read and agree to accept{" "}
              <Link to="/terms" className="text-amber-500 hover:underline">
                User Agreement
              </Link>
            </label>
          </div>

          {/* Error */}
          {error && (
            <div className="text-red-600 text-sm mb-4">{error}</div>
          )}

          {/* Register Button */}
          <Button 
            onClick={onRegister} 
            disabled={loading} 
            className="w-full h-12 bg-amber-400 hover:bg-amber-500 text-navy font-semibold rounded-lg mb-6"
          >
            {loading ? "Registering..." : "Register"}
          </Button>

          {/* Footer Link */}
          <div className="text-center">
            <Link to="/signin" className="text-amber-500 font-medium hover:underline">
              Already have account? Log in now
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}