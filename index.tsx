import { Button, Col, Input, Row } from "antd";
import TestProvider ,{ TestContext } from "./TestProvider";
import * as React from "react";
const packageJson = require("./package.json") as any;

export const getAttributes = (): any => {
  return {
    name: packageJson.name,
    libraryName: packageJson.libraryName,
    version: packageJson.version,
    service: {
      name: packageJson.libraryName,
      provider:  TestProvider,
      contextApi: TestContext,
      defaultValue: {},
    },
  };
};

const Plugin = ({ useAuth ,getContextApi}) => {
  const { userName, setUserName } = useAuth();
    const context = React.useContext(getContextApi("testPlugin"));
  return (
    <Row>
      <Input
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></Input>
      <Col>
        <Button>{userName}</Button>
      </Col>
    </Row>
  );
};

export default Plugin;
