import React, { useState } from "react";

const FilterDropdown = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1", checked: false },
    { id: 2, text: "Item 2", checked: false },
    { id: 3, text: "Item 3", checked: false },
  ]);

  const handleItemClick = (id: number) => {
    const updatedItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setItems(updatedItems);
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="relative w-full inline-block text-left">
      <button
        onClick={() => setDropdownVisible(!dropdownVisible)}
        className="h-12 bg-white rounded-md px-4 py-2 text-sm border-neutral-900 border-2 font-[degularsemibold] w-full"
      >
        Start Date
      </button>
      {dropdownVisible && (
        <div className="absolute left-0  w-full bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-2">
            {items.map((item) => (
              <li key={item.id} className="flex items-center px-4 py-2 cursor-pointer">
                <input type="checkbox" className="mr-2" checked={item.checked} onChange={() => handleItemClick(item.id)} />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
