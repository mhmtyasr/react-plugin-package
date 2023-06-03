import { Button, Col, Input, Row } from "antd";
import TestProvider ,{ useTest } from "./TestProvider";

const packageJson = require("./package.json") as any;

export const getAttributes = (): any => {
  return {
    name: packageJson.name,
    libraryName: packageJson.libraryName,
    version: packageJson.version,
  };
};

const Plugin = ({ useAuth,getContextApi }) => {
  const { userName, setUserName } = useAuth();
  const a = getContextApi();  

  debugger;
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
