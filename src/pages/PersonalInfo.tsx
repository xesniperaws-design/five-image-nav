import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PersonalInfo() {
  const [formData, setFormData] = useState({
    surname: "",
    firstName: "",
    gender: "",
    birthday: "",
    country: "United States",
    address: "",
    phoneNumber: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving personal info:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header title="Personal" />
      
      <div className="p-4">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground mb-6">
          <ArrowLeft className="w-4 h-4" />
        </Link>

        <div className="space-y-6">
          {/* Surname */}
          <div>
            <Label className="text-sm text-muted-foreground mb-2 block">Surname</Label>
            <Input
              placeholder="Surname"
              value={formData.surname}
              onChange={(e) => handleInputChange("surname", e.target.value)}
              className="h-12"
            />
          </div>

          {/* First Name */}
          <div>
            <Label className="text-sm text-muted-foreground mb-2 block">First name</Label>
            <Input
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="h-12"
            />
          </div>

          {/* Gender */}
          <div>
            <Label className="text-sm text-muted-foreground mb-2 block">Gender</Label>
            <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Birthday */}
          <div>
            <Label className="text-sm text-muted-foreground mb-2 block">Birthday</Label>
            <Input
              type="date"
              placeholder="Birthday"
              value={formData.birthday}
              onChange={(e) => handleInputChange("birthday", e.target.value)}
              className="h-12"
            />
          </div>

          {/* Country */}
          <div>
            <Label className="text-sm text-muted-foreground mb-2 block">Country</Label>
            <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
              <SelectTrigger className="h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="United States">United States</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                <SelectItem value="Germany">Germany</SelectItem>
                <SelectItem value="France">France</SelectItem>
                <SelectItem value="Japan">Japan</SelectItem>
                <SelectItem value="Australia">Australia</SelectItem>
                <SelectItem value="Brazil">Brazil</SelectItem>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="China">China</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Address */}
          <div>
            <Label className="text-sm text-muted-foreground mb-2 block">Address</Label>
            <Input
              placeholder="Address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="h-12"
            />
          </div>

          {/* Phone Number */}
          <div>
            <Label className="text-sm text-muted-foreground mb-2 block">Phone number</Label>
            <div className="flex gap-2">
              <Select defaultValue="+1">
                <SelectTrigger className="w-24 h-12">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-3 bg-red-500 relative">
                      <div className="w-2 h-1 bg-white absolute top-0 left-0"></div>
                      <div className="w-1 h-2 bg-blue-500 absolute top-0 left-0"></div>
                    </div>
                    <span className="text-sm">+1</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+1">🇺🇸 +1</SelectItem>
                  <SelectItem value="+44">🇬🇧 +44</SelectItem>
                  <SelectItem value="+49">🇩🇪 +49</SelectItem>
                  <SelectItem value="+33">🇫🇷 +33</SelectItem>
                  <SelectItem value="+81">🇯🇵 +81</SelectItem>
                  <SelectItem value="+86">🇨🇳 +86</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className="flex-1 h-12"
              />
            </div>
          </div>

          {/* Save Button */}
          <Button 
            onClick={handleSave}
            className="w-full h-12 text-lg bg-primary hover:bg-primary/90 mt-8"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}