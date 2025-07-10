
import { useState } from "react";
import { Bot } from "lucide-react";
import ChatSidebar from "@/components/ChatSidebar";
import ChatArea from "@/components/ChatArea";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 ml-16">
            <Bot className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">AI Assistant</h1>
              <p className="text-blue-100">How can I help you today?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto max-w-4xl flex flex-col h-full">
        <ChatArea />
      </div>

      {/* Sidebar */}
      <ChatSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
    </div>
  );
};

export default Index;
