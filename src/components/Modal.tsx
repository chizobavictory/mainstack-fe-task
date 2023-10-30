import React, { useState } from "react";
import close from "../assets/close.svg";
import FilterDropdown from "./FilterDropdown";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const buttonLabels = ["Today", "Last 7 days", "This month", "Last 3 months", "This year", "Last year", "All time"];

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  const [transactionTypes, setTransactionTypes] = useState([
    { id: 1, text: "Store Transactions", checked: false },
    { id: 2, text: "Get Tipped", checked: false },
    { id: 3, text: "Withdrawals", checked: false },
    { id: 4, text: "Chargebacks", checked: false },
    { id: 5, text: "Cashbacks", checked: false },
    { id: 6, text: "Refer & Earn", checked: false },
  ]);

  const [transactionStatuses, setTransactionStatuses] = useState([
    { id: 1, text: "Success", checked: false },
    { id: 2, text: "Pending", checked: false },
    { id: 3, text: "Failed", checked: false },
  ]);

  const [transactionTypesDropdownVisible, setTransactionTypesDropdownVisible] = useState(false);
  const [transactionStatusesDropdownVisible, setTransactionStatusesDropdownVisible] = useState(false);

  const toggleTransactionTypesDropdown = () => {
    setTransactionTypesDropdownVisible(!transactionTypesDropdownVisible);
  };

  const toggleTransactionStatusesDropdown = () => {
    setTransactionStatusesDropdownVisible(!transactionStatusesDropdownVisible);
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
      {/* Grayed-out background */}
      <div className="fixed inset-0 bg-gray-400 opacity-50 z-10" onClick={onClose}></div>

      {/* Filter modal with custom animation */}
      <div
        className={`fixed top-2 right-2 w-[420px] h-[97.5%] rounded-[20px] bg-white  shadow-2xl transform z-20 animate-slide-in-slow ${
          isOpen ? "" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-[degularsemibold] text-neutral-900">Filter</h2>
            <button onClick={onClose} className="hover:bg-gray-200 rounded-full">
              <img src={close} alt="close" />
            </button>
          </div>
          <div className="flex h-10 gap-2 overflow-x-auto">
            {buttonLabels.map((label, index) => (
              <button key={index} className="px-5 py-2.5 bg-white rounded-full border border-gray-100 flex items-center gap-1">
                <p className="text-neutral-900 text-sm font-[degularsemibold]">{label}</p>
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="h-4 text-neutral-900 text-base font-[degularsemibold]  leading-normal">Date Range</p>
            <div className="flex justify-between gap-2 ">
              <input
                type="text"
                placeholder="Start Date"
                className="w-[200px] h-12  bg-gray-100 rounded-md px-4 py-2 text-sm text-neutral-900 font-[degularsemibold]"
              />
              <input
                type="text"
                placeholder="End Date"
                className="w-[200px] h-12  bg-gray-100 rounded-md px-4 py-2 text-sm text-neutral-900 font-[degularsemibold]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="h-4 text-neutral-900 text-base font-[degularsemibold]  leading-normal">Transaction Type</p>
            <FilterDropdown
              items={transactionTypes}
              onItemCheck={(id) => {
                const updatedItems = transactionTypes.map((item) =>
                  item.id === id ? { ...item, checked: !item.checked } : item
                );
                setTransactionTypes(updatedItems);
              }}
              selectedItems={transactionTypes.filter((item) => item.checked)}
              onToggleDropdown={toggleTransactionTypesDropdown}
              dropdownVisible={transactionTypesDropdownVisible}
              buttonText="Select Transaction Type"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="h-4 text-neutral-900 text-base font-[degularsemibold]  leading-normal">Transaction Status</p>
            <FilterDropdown
              items={transactionStatuses}
              onItemCheck={(id) => {
                const updatedItems = transactionStatuses.map((item) =>
                  item.id === id ? { ...item, checked: !item.checked } : item
                );
                setTransactionStatuses(updatedItems);
              }}
              selectedItems={transactionStatuses.filter((item) => item.checked)}
              onToggleDropdown={toggleTransactionStatusesDropdown}
              dropdownVisible={transactionStatusesDropdownVisible}
              buttonText="Select Transaction Status"
            />
          </div>
          <div className="flex justify-between gap-3 mt-20 ">
            <button className="h-12 px-6 py-3 bg-white rounded-[100px] border border-gray-100 justify-center items-center w-full">
              Clear
            </button>
            <button className="h-12 px-6 py-3 bg-neutral-900 rounded-[100px] justify-center items-center gap-2 text-white w-full">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
