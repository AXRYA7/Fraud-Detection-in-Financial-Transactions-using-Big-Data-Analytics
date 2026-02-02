import svgPaths from "../imports/svg-7iefl1yqzt";
import imgFrame52 from "figma:asset/f16d305d93865d214c9b8b6d4e64f547743529a0.png";
import { Home, Upload, FileText } from "lucide-react";
import Navbar from "./Navbar";
import { useRef, useState } from "react";
import { uploadCSV } from "../api";

interface Props {
  onNavigate: (screen: "upload" | "processing" | "results") => void;
  onTransactionsUpdate: (transactions: any[]) => void;
}

export default function ResponsiveDesktop({
  onNavigate,
  onTransactionsUpdate,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // ✅ FIXED CSV CHECK
  const handleFileSelect = (file: File) => {
    if (file.name.toLowerCase().endsWith(".csv")) {
      setUploadedFile(file);
      console.log("📄 CSV selected:", file.name);
    } else {
      alert("Please upload a valid CSV file");
    }
  };

  const handleAnalyze = async () => {
    if (!uploadedFile) {
      alert("Please upload a CSV file first");
      return;
    }

    try {
      console.log("🔥 ANALYZE CLICKED");
      setLoading(true);
      onNavigate("processing");

      const rawResult = await uploadCSV(uploadedFile);

      const mappedTransactions = rawResult.map((item: any) => ({
        id: String(item.id),
        amount: String(item.amount),
        status: item.prediction === 1 ? "fraud" : "genuine",
      }));

      onTransactionsUpdate(mappedTransactions);
      onNavigate("results");
    } catch (err) {
      console.error(err);
      alert("Failed to analyze CSV");
      onNavigate("upload");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden relative">
      <Navbar onNavigate={onNavigate} currentScreen="upload" />

      {/* Header */}
      <div className="px-4 sm:px-8 lg:px-[68px] pt-24 lg:pt-[175px] pb-12">
        <h1 className="text-white text-[68px] mb-12">
          Fraud Detection in Financial Transactions
        </h1>
        <p className="text-white text-[36px]">
          Upload your transaction data to analyze fraudulent activity.
        </p>
      </div>

      {/* Upload Section */}
      <div className="px-4 sm:px-8 lg:px-[68px] pb-12">
        <div className="bg-[#fcfcfc] border-4 border-[#ff9090] rounded-[8px] p-12">
          <p className="text-[30px] font-bold text-center mb-6">
            Upload Transaction Data
          </p>

          <div
            className={`bg-[#f5f5f5] h-[177px] mb-8 flex flex-col items-center justify-center cursor-pointer ${
              isDragging ? "bg-[#e8e8e8]" : ""
            }`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setIsDragging(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              if (e.dataTransfer.files[0]) {
                handleFileSelect(e.dataTransfer.files[0]);
              }
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={(e) =>
                e.target.files && handleFileSelect(e.target.files[0])
              }
              className="hidden"
            />

            <p className="text-[30px] font-bold">
              {uploadedFile
                ? uploadedFile.name
                : "Drag and Drop CSV file here"}
            </p>
            <p className="text-blue-600">
              {uploadedFile ? "Click to change file" : "or click to browse"}
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="bg-black text-white rounded-[8px] h-[81px] px-10 text-[34px] hover:bg-red-600 disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Analyze Transaction"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-[#111] border-t border-gray-800">
        <div className="flex justify-around h-16">
          <button onClick={() => onNavigate("upload")} className="text-white">
            <Home />
          </button>
          <button onClick={() => onNavigate("upload")} className="text-white">
            <Upload />
          </button>
          <button onClick={() => onNavigate("results")} className="text-gray-400">
            <FileText />
          </button>
        </div>
      </nav>
    </div>
  );
}
