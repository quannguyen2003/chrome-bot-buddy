
import { useState } from "react";
import { Bot, Settings, Sliders } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const [temperature, setTemperature] = useState([0.7]);
  const [maxTokens, setMaxTokens] = useState([150]);
  const [topP, setTopP] = useState([0.9]);

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-4 py-2">
          <Bot className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-800">AI Settings</h2>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Model Parameters
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <Card className="p-4 space-y-6">
              {/* Temperature Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="temperature" className="text-sm font-medium">
                    Temperature
                  </Label>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {temperature[0]}
                  </span>
                </div>
                <Slider
                  id="temperature"
                  min={0}
                  max={2}
                  step={0.1}
                  value={temperature}
                  onValueChange={setTemperature}
                  className="w-full"
                />
                <p className="text-xs text-gray-500">
                  Controls randomness. Lower values make responses more focused.
                </p>
              </div>

              {/* Max Tokens Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="maxTokens" className="text-sm font-medium">
                    Max Tokens
                  </Label>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {maxTokens[0]}
                  </span>
                </div>
                <Slider
                  id="maxTokens"
                  min={50}
                  max={500}
                  step={10}
                  value={maxTokens}
                  onValueChange={setMaxTokens}
                  className="w-full"
                />
                <p className="text-xs text-gray-500">
                  Maximum length of the AI response.
                </p>
              </div>

              {/* Top P Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="topP" className="text-sm font-medium">
                    Top P
                  </Label>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {topP[0]}
                  </span>
                </div>
                <Slider
                  id="topP"
                  min={0}
                  max={1}
                  step={0.1}
                  value={topP}
                  onValueChange={setTopP}
                  className="w-full"
                />
                <p className="text-xs text-gray-500">
                  Controls diversity of word selection.
                </p>
              </div>
            </Card>

            {/* Model Info */}
            <Card className="p-4 mt-4 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-800">Model: GPT-3.5 Turbo</span>
              </div>
              <p className="text-xs text-gray-600">
                Fast and efficient AI model for general conversations.
              </p>
            </Card>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
