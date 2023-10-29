import React from 'react'

const UserDropdown = () => {
  return (
    <div className="absolute top-27 right-4 w-[340px] bg-white border border-gray-300 shadow-md rounded-md p-2 ">
      <ul className="py-2">
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Item 1</li>
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Item 2</li>
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Item 3</li>
      </ul>
    </div>
  );
};


export default UserDropdown