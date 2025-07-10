
import { Bot } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import ChatArea from "@/components/ChatArea";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex w-full">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg z-10">
          <div className="container mx-auto flex items-center gap-3">
            <SidebarTrigger className="text-white hover:bg-white/20 p-2 rounded" />
            <Bot className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">AI Assistant</h1>
              <p className="text-blue-100">How can I help you today?</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <main className="flex-1 pt-20">
          <div className="container mx-auto max-w-4xl h-full">
            <ChatArea />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
