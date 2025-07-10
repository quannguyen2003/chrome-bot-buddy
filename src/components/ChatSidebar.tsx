
import { useState } from "react";
import { Bot, Settings, Sliders } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface ChatSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatSidebar = ({ isOpen, onToggle }: ChatSidebarProps) => {
  const [temperature, setTemperature] = useState([0.7]);
  const [maxTokens, setMaxTokens] = useState([150]);
  const [topP, setTopP] = useState([0.9]);

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <Sliders className="w-5 h-5" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-xl transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-80`}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <Bot className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-800">AI Settings</h2>
          </div>

          {/* Settings Card */}
          <Card className="p-6 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-4 h-4 text-gray-600" />
              <h3 className="font-semibold text-gray-800">Model Parameters</h3>
            </div>

            {/* Temperature Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="temperature" className="text-sm font-medium text-gray-700">
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
                <Label htmlFor="maxTokens" className="text-sm font-medium text-gray-700">
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
                <Label htmlFor="topP" className="text-sm font-medium text-gray-700">
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
          <Card className="p-4 mt-6 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center gap-2 mb-2">
              <Bot className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-800">Model: GPT-3.5 Turbo</span>
            </div>
            <p className="text-xs text-gray-600">
              Fast and efficient AI model for general conversations.
            </p>
          </Card>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default ChatSidebar;
