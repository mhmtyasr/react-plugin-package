import * as React from "react";

const packageJson = require("./package.json") as any;
import Map from "./components/Map";

export const getAttributes = (): any => {
  return {
    name: packageJson.name,
    libraryName: packageJson.libraryName,
    version: packageJson.version,
  };
};

const Plugin = ({ useAuth, getContextApi }) => {
  const { missionData, handleAddMissionData } = React.useContext(
    getContextApi("testPluginWithProvider")
  );
  return <Map getContextApi={getContextApi} />;
};

export default Plugin;
