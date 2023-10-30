import React from "react";
import close from "../assets/close.svg";
import FilterDropdown from "./FilterDropdown";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const buttonLabels = ["Today", "Last 7 days", "This month", "Last 3 months", "This year", "Last year", "All time"];

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
      {/* Grayed-out background */}
      <div className="fixed inset-0 bg-gray-400 opacity-50 z-10" onClick={onClose}></div>

      {/* Filter modal with custom animation */}
      <div
        className={`fixed top-2 right-2 w-[420px] h-[97.5%] rounded-[20px] bg-white border border-gray-200 shadow-2xl transform z-20 animate-slide-in-slow ${
          isOpen ? "" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col gap-6 ">
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
              <FilterDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
