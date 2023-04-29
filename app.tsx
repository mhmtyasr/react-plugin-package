import { Button, Col, Row } from "antd";

const packageJson = require("./package.json") as any;

export const getAttributes = (): any => {
  return {
    name: packageJson.name,
    libraryName: packageJson.libraryName,
    version: packageJson.version,
  };
};

const App = () => {
  return (
    <Row>
      <Col>
        <Button>Test</Button>
      </Col>
      <Col>
        <Button>Test</Button>
      </Col>
    </Row>
  );
};

export default App;
