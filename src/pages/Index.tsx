
import { Chrome, Download, MessageCircle, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const handleDownload = () => {
    // In a real scenario, this would trigger the download of the extension
    alert("Extension download would start here! For now, please follow the installation instructions below.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            AI-Powered Chrome Extension
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your AI Assistant<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Right in Your Browser
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get instant AI assistance while browsing. Ask questions, get help, and boost your productivity 
            with our intelligent chatbot extension.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={handleDownload} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              <Chrome className="mr-2 h-5 w-5" />
              Add to Chrome
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              Free & Secure
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl">Instant Chat</CardTitle>
              <CardDescription>
                Click the extension icon to open an intelligent chat interface that's always ready to help.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Zap className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle className="text-xl">Lightning Fast</CardTitle>
              <CardDescription>
                Get instant responses without leaving your current page or interrupting your workflow.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <CardTitle className="text-xl">Privacy First</CardTitle>
              <CardDescription>
                Your conversations are stored locally in your browser. We prioritize your privacy and security.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Installation Instructions */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-gray-900">Installation Instructions</CardTitle>
              <CardDescription className="text-lg">
                Follow these simple steps to install your AI chatbot extension
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="outline" className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-blue-100 text-blue-800 border-blue-200">
                      1
                    </Badge>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Download Extension Files</h3>
                      <p className="text-gray-600 text-sm">
                        The extension files are included in this project. Look for the <code className="bg-gray-100 px-2 py-1 rounded text-xs">public/manifest.json</code> and <code className="bg-gray-100 px-2 py-1 rounded text-xs">public/popup.html</code> files.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Badge variant="outline" className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-blue-100 text-blue-800 border-blue-200">
                      2
                    </Badge>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Open Chrome Extensions</h3>
                      <p className="text-gray-600 text-sm">
                        Type <code className="bg-gray-100 px-2 py-1 rounded text-xs">chrome://extensions/</code> in your address bar and press Enter.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Badge variant="outline" className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-blue-100 text-blue-800 border-blue-200">
                      3
                    </Badge>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Enable Developer Mode</h3>
                      <p className="text-gray-600 text-sm">
                        Toggle on "Developer mode" in the top-right corner of the extensions page.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="outline" className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-purple-100 text-purple-800 border-purple-200">
                      4
                    </Badge>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Load Unpacked Extension</h3>
                      <p className="text-gray-600 text-sm">
                        Click "Load unpacked" and select the <code className="bg-gray-100 px-2 py-1 rounded text-xs">public</code> folder from this project.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Badge variant="outline" className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-purple-100 text-purple-800 border-purple-200">
                      5
                    </Badge>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Pin the Extension</h3>
                      <p className="text-gray-600 text-sm">
                        Click the puzzle piece icon in Chrome's toolbar and pin the "AI Chatbot Assistant" extension.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Badge variant="outline" className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-green-100 text-green-800 border-green-200">
                      ✓
                    </Badge>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Start Chatting!</h3>
                      <p className="text-gray-600 text-sm">
                        Click the extension icon to open the chat interface and start your conversation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Chrome className="w-3 h-3 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Note for Developers</h4>
                    <p className="text-sm text-gray-600">
                      This is a demonstration version. In a production environment, you would submit the extension to the Chrome Web Store for users to install directly. The extension includes proper manifest v3 configuration and follows Chrome extension best practices.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">Fast</div>
            <div className="text-gray-600">Instant responses</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">Secure</div>
            <div className="text-gray-600">Local storage only</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">Free</div>
            <div className="text-gray-600">No subscriptions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
