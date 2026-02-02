import { Home, Upload, FileText } from "lucide-react";

export default function Navbar({ onNavigate, currentScreen }: { onNavigate: (screen: string) => void; currentScreen: string }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#111111] border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">Fraud Detection System</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => onNavigate('upload')}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                currentScreen === 'upload' 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              <Upload className="w-5 h-5 mr-2" />
              Upload Transactions
            </button>
            <button
              onClick={() => onNavigate('results')}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                currentScreen === 'results' 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              <FileText className="w-5 h-5 mr-2" />
              Results
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}