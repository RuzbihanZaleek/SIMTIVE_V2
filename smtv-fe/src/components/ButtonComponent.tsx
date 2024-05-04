import { Button, ConfigProviderProps, Flex } from "antd";
import React from "react";

interface DataType {
  text: string;
  size?: ConfigProviderProps["componentSize"];
}

const ButtonComponent: React.FC<DataType> = ({ text, size = "large" }) => {
  return (
    <Flex vertical style={{ width: "10%" }}>
      <Button type="primary" size={size}>
        {text}
      </Button>
    </Flex>
  );
};

export default ButtonComponent;
