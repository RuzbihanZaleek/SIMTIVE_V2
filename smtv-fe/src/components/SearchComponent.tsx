import React from "react";

const SearchComponent: React.FC = () => {
  return (
    <div className="bg-slate-200 flex items-center gap-4 border-2 rounded border-transparent focus-within:border-blue-500 focus-within:bg-slate-200 px-4 h-10 w-1/4">
      <i className="fa fa-search fa-lg" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full outline-none bg-transparent text-[#333] text-sm"
      />
    </div>
  );
};

export default SearchComponent;
