import React from "react";

const Sidebar: React.FC = () => {
  const sideBarItems = [
    "Dashboard",
    "Audience",
    "Posts",
    "Schedules",
    "Promote",
  ];

  return (
    <nav className="bg-white shadow-lg h-screen left-0 min-w-[240px] py-6 px-4 font-[sans-serif] overflow-auto">
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-black cursor-pointer">
        <i className="fa fa-arrow-left fa-lg" />
        <p className="text-black text-xl">Back</p>
      </div>

      <ul className="mt-5">
        {sideBarItems.map((item, index) => (
          <li key={index}>
            <a className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all cursor-pointer">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
