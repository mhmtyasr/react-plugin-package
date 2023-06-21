import { Button, Col, Input, Row } from "antd";
import TestProvider, { TestContext } from "./TestProvider";
import * as React from "react";
const packageJson = require("./package.json") as any;

export const getAttributes = (): any => {
  return {
    name: packageJson.name,
    libraryName: packageJson.libraryName,
    version: packageJson.version,
    service: {
      name: packageJson.libraryName,
      provider: TestProvider,
      contextApi: TestContext,
      defaultValue: {},
    },
  };
};

const Plugin = ({ useAuth, getContextApi }) => {
  const { missionData,handleAddMissionData } = React.useContext(
    getContextApi("testPluginWithProvider")
  );

  const [entityName, setEntityName] = React.useState<string>("");

  return (
    <Row>
      <Input
        value={entityName}
        onChange={(e) => {
          setEntityName(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          handleAddMissionData(entityName);
        }}
      >
        Add Mission
      </Button>
      {missionData.length}
    </Row>
  );
};

export default Plugin;
