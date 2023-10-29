import React from "react";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`filter-modal ${isOpen ? "open" : ""}`}>
      {/* Your modal content */}
      <div className="modal-content">
        {/* Add your filter options and other content here */}
        hello boys
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FilterModal;
