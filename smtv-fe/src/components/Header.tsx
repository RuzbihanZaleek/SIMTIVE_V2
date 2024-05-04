import React from "react";
import SearchComponent from "./SearchComponent";

const Header: React.FC = () => {
  const IconDropdownList = ["About", "Contact", "Logout"];

  return (
    <header className="flex border-b bg-blue-900 font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between px-10 py-3 gap-4 w-full">
        <SearchComponent />
        <ul>
          <li className="group max-lg:border-b max-lg:py-3 relative">
            <i className="fa fa-user-circle-o fa-2x cursor-pointer" />
            <ul className="absolute shadow-lg bg-white rounded space-y-5 mt-5 lg:top-10 max-lg:top-8 -left-48 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
              {IconDropdownList.map((item, index) => (
                <li key={index} className="border-b py-2 ">
                  <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
