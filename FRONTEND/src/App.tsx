import ResponsiveDesktop from './components/ResponsiveDesktop';
import ProcessingScreen from './components/ProcessingScreen';
import ResultsScreen from './components/ResultsScreen';
import { useState } from 'react';

// Define the Transaction type
interface Transaction {
  id: string;
  amount: string;
  status: "fraud" | "genuine";
}

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<'upload' | 'processing' | 'results'>('upload');

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleNavigate = (screen: 'upload' | 'processing' | 'results') => {
    setCurrentScreen(screen);
  };

  if (currentScreen === 'processing') {
    return <ProcessingScreen onNavigate={handleNavigate} />;
  }

  if (currentScreen === 'results') {
    return (
      <ResultsScreen
        onNavigate={handleNavigate}
        transactions={transactions}
      />
    );
  }

  // ✅ THIS WAS THE MISSING PART
  return (
    <ResponsiveDesktop
      onNavigate={handleNavigate}
      onTransactionsUpdate={setTransactions}
    />
  );
}
