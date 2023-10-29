import React from 'react';
import call_received from '../assets/call_received.svg';
import useTransactionData from '../hooks/transactions';

interface Transaction {
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

const TransactionsList = () => {
  const transactionData = useTransactionData() as Transaction[];

  return (
    <div className="flex flex-col gap-4 pt-6">
      {transactionData ? (
        transactionData.map((transaction, index) => (
          <div key={index} className="flex justify-between">
            <div className="flex gap-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <img src={call_received} alt="call-made" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-neutral-900 text-base font-[degularmedium]">
                  {transaction.metadata?.name }
                </p>
                <p className="text-gray-600 text-sm font-[degularmedium]">
                  {transaction.metadata?.email}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <p className="text-base font-[degularbold] text-neutral-900">
                USD {transaction.amount.toFixed(2)}
              </p>
              <p className="text-sm font-[degularmedium] text-gray-600">{transaction.date}</p>
            </div>
          </div>
        ))
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default TransactionsList;
