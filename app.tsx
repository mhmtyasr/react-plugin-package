import { Button, Col, Row } from "antd";

const packageJson = require("./package.json") as any;

export const getAttributes = (): any => {
  return {
    name: packageJson.name,
    libraryName: packageJson.libraryName,
    version: packageJson.version,
  };
};

const App = (useAuth) => {

  const { userName } = useAuth();
  debugger;
  return (
    <Row>
      <Col>
        <Button>{userName}</Button>
      </Col>
    </Row>
  );
};

export default App;
