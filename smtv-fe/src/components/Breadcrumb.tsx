import React from "react";

const Breadcrumb: React.FC = () => {
  return (
    <ul className="flex items-center justify-center font-[sans-serif] space-x-4">
      <li className="text-gray-400 text-lg font-bold cursor-pointer">Home</li>
      <li>
        <i className="fa fa-angle-right fa-lg" style={{ fontWeight: "bold" }} />
      </li>
      <li className="text-gray-400 text-lg font-bold cursor-pointer">
        Profile
      </li>
      <li>
        <i className="fa fa-angle-right fa-lg" style={{ fontWeight: "bold" }} />
      </li>
      <li className="text-[#333] text-lg font-bold cursor-pointer">Edit</li>
    </ul>
  );
};

export default Breadcrumb;
