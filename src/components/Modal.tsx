import React from "react";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
      {/* Grayed-out background */}
      <div className="fixed inset-0 bg-gray-400 opacity-50 z-10" onClick={onClose}></div>

      {/* Filter modal with custom animation */}
      <div
        className={`fixed top-2 right-2 w-[420px] h-[670px] rounded-[20px] bg-white border border-gray-200 shadow-2xl transform z-20 animate-slide-in-slow ${
          isOpen ? "" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          {/* Your filter options and other content */}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
