import { Button, Col, Input, Row } from "antd";
import TestProvider ,{ TestContext } from "./TestProvider";
import * as React from "react";
const packageJson = require("./package.json") as any;

export const getAttributes = (): any => {
  return {
    name: packageJson.name,
    libraryName: packageJson.libraryName,
    version: packageJson.version,
  };
};

const Plugin = ({ useAuth ,getContextApi}) => {
  const { userName, setUserName } = useAuth();
    const {setTestUserName,testUserName} = React.useContext(getContextApi("testPlugin"));

  return (
    <Row>
      <Input
        onChange={(e) => {
          setTestUserName(e.target.value);
        }}
      ></Input>
      <Col>
        <Button>{userName}</Button>
        <Button>{testUserName}</Button>
      </Col>
    </Row>
  );
};

export default Plugin;
