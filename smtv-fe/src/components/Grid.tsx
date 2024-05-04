import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },
    // defaultSortOrder: "descend",
    sorter: (a, b) => a.name.length - b.name.length,
    width: '40%'
  },
  {
    title: "Age",
    dataIndex: "age",
    // defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
    width: '20%'
  },
  {
    title: "Address",
    dataIndex: "address",
    // defaultSortOrder: "descend",
    sorter: (a, b) => a.address.length - b.address.length,
    width: '40%'
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Grid: React.FC = () => (
  <div>
    <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    showSorterTooltip={{ target: "sorter-icon" }}
  />
  </div>
);

export default Grid;
