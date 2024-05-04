import React from "react";
import { Tabs } from "antd";
import { Badge,  } from "antd";
import type { TabsProps } from "antd";
import Grid from "./Grid";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  { key: "1", label: <Badge count={10} color="#0D47A1" offset={[13, 0]}>Requirements </Badge>, children: <Grid />},
  { key: "2", label: <Badge count={35} color="#0D47A1" offset={[13, 0]}>Test Cases </Badge>, children: "Content of Tab Pane 2" },
  { key: "3", label: <Badge count={8} color="#0D47A1" offset={[13, 0]}>Components </Badge>, children: "Content of Tab Pane 3" },
]; 

const TabComponent: React.FC = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      indicator={{ size: (origin) => origin - 20, align: "center" }}
    />
  );
};

export default TabComponent;
