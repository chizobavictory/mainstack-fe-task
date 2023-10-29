// useTransactionData.ts

import { useState, useEffect } from 'react';

interface TransactionData {
  amount: number;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity?: number;
    country: string;
    product_name?: string;
  };
  payment_reference?: string;
  status: string;
  type: string;
  date: string;
}

const useTransactionData = () => {
  const [transactionData, setTransactionData] = useState<TransactionData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fe-task-api.mainstack.io/transactions');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Transaction data:', data);
        setTransactionData(data);
      } catch (error) {
        console.error('Error fetching transaction data:', error);
      }
    };

    fetchData();
  }, []);

  return transactionData;
};

export default useTransactionData;
