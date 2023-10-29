// useWalletData.ts

import { useState, useEffect } from 'react';

interface WalletData {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

const useWalletData = () => {
  const [walletData, setWalletData] = useState<WalletData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fe-task-api.mainstack.io/wallet');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Wallet data:', data);
        setWalletData(data);
      } catch (error) {
        console.error('Error fetching wallet data:', error);
      }
    };

    fetchData();
  }, []);

  return walletData;
};

export default useWalletData;
