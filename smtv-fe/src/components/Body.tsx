import React from "react";
import Breadcrumb from "./Breadcrumb";
import Grid from "./Grid";
import SearchComponent from "./SearchComponent";
import ButtonComponent from "./ButtonComponent";
import TabComponent from "./TabComponent";

const Body: React.FC = () => {
  return (
    <div className="p-5 flex flex-col gap-4">
      <Breadcrumb />
      <div className="w-full flex gap-4">
        <SearchComponent />
        <ButtonComponent text="Filter" />
        <ButtonComponent text="Clear" />
      </div>
      <TabComponent />
    </div>
  );
};

export default Body;
