import React, { useState } from "react";
import expand from "../assets/expand_more.svg";
import download from "../assets/download.svg";
import TransactionsList from "./TransactionsList";
import FilterModal from "./Modal";
import useTransactionData from "../hooks/transactions";

const Transactions = () => {
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  const openFilterModal = () => {
    setFilterModalOpen(true);
  };

  const closeFilterModal = () => {
    setFilterModalOpen(false);
  };
  const transactionData = useTransactionData();
  const totalTransactions = transactionData ? transactionData.length : 0;


  return (
    <div className="flex flex-col pt-20">
      <div className="flex justify-between">
        <div className="text-neutral-900 flex flex-col gap-1">
          <p className="font-[degularbold] text-2xl">{totalTransactions} Transactions</p>
          <p className="font-[degularmedium] text-gray-600">Your transactions for the last 7 days</p>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-gray-100 text-neutral-900 p-4 items-center flex gap-2 rounded-full font-[degularsemibold] h-12"
            onClick={openFilterModal}
          >
            Filter
            <img src={expand} alt="expand" />
          </button>
          <button className="bg-gray-100 text-neutral-900 p-4 items-center flex gap-2 rounded-full font-[degularsemibold] h-12">
            Export list
            <img src={download} alt="download" />
          </button>
        </div>
      </div>
      <div className="w-full border-t mt-4 border-gray-300" />
      <TransactionsList />
      <FilterModal isOpen={isFilterModalOpen} onClose={closeFilterModal} />
    </div>
  );
};

export default Transactions;
