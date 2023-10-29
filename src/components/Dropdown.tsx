import React from "react";

import vector from "../assets/vector.svg";
import vector1 from "../assets/vector1.svg";
import vector2 from "../assets/vector2.svg";
import vector3 from "../assets/vector3.svg";

const Dropdown = () => {
  return (
    <div className="absolute top-27 left-[58%] w-[340px] bg-white border border-gray-300 shadow-md rounded-md p-2 ">
      <ul className="py-2">
        <li className="px-4 py-2 hover:shadow cursor-pointer rounded-md">
          <div className="p-2 cursor-pointer flex gap-2">
            <img src={vector3} alt="side-menu" />
            <div className="flex flex-col gap-1">
              <p className="text-neutral-900 text-base font-[degularmedium]">Link in Bio </p>
              <p className="text-gray-600 text-sm font-[degularmedium]">Manage your Link in Bio</p>
            </div>
          </div>
        </li>
        <li className="px-4 py-2 hover:shadow cursor-pointer rounded-md">
          <div className="p-2 cursor-pointer flex gap-2">
            <img src={vector} alt="side-menu" />
            <div className="flex flex-col gap-1">
              <p className="text-neutral-900 text-base font-[degularmedium]">Store </p>
              <p className="text-gray-600 text-sm font-[degularmedium]">Manage store activities</p>
            </div>
          </div>
        </li>
        <li className="px-4 py-2 hover:shadow cursor-pointer rounded-md">
          <div className="p-2 cursor-pointer flex gap-2">
            <img src={vector2} alt="side-menu" />
            <div className="flex flex-col gap-1">
              <p className="text-neutral-900 text-base font-[degularmedium]">Media Kit </p>
              <p className="text-gray-600 text-sm font-[degularmedium]">Manage your Media Kit</p>
            </div>
          </div>
        </li>
        <li className="px-4 py-2 hover:shadow cursor-pointer rounded-md">
          <div className="p-2 cursor-pointer flex gap-2">
            <img src={vector1} alt="side-menu" />
            <div className="flex flex-col gap-1">
              <p className="text-neutral-900 text-base font-[degularmedium]">Invoicing </p>
              <p className="text-gray-600 text-sm font-[degularmedium]">Manage your Invoicing</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
