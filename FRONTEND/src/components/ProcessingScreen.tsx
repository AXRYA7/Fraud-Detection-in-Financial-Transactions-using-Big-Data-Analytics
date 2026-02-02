import { Home, Upload, FileText } from "lucide-react";
import Navbar from "./Navbar";

export default function ProcessingScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen bg-black">
      {/* Top Navbar */}
      <Navbar onNavigate={onNavigate} currentScreen="processing" />

      {/* Main Content Area */}
      <main className="flex items-center justify-center min-h-screen px-6 pb-16 md:pb-0 pt-16">
        <div className="text-center max-w-2xl">
          {/* Spinner */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 border-4 border-gray-800 border-t-red-600 rounded-full animate-spin"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-white mb-4">
            Analyzing Transactions
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-400 mb-2">
            Processing your transaction data using the fraud detection model
          </p>

          {/* Optional Small Text */}
          <p className="text-sm text-gray-500">
            This may take a few moments.
          </p>
        </div>
      </main>

      {/* Bottom Navigation Bar for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#111111] border-t border-gray-800 z-50">
        <div className="flex justify-around items-center h-16">
          <button
            onClick={() => onNavigate('upload')}
            className="flex flex-col items-center justify-center flex-1 h-full text-gray-400"
          >
            <Upload className="w-6 h-6 mb-1" />
            <span className="text-xs">Upload</span>
          </button>
          <button
            onClick={() => onNavigate('results')}
            className="flex flex-col items-center justify-center flex-1 h-full text-gray-400"
          >
            <FileText className="w-6 h-6 mb-1" />
            <span className="text-xs">Results</span>
          </button>
        </div>
      </nav>
    </div>
  );
}