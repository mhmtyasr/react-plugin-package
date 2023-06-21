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
  const { missionData, setMissionData } = React.useContext(
    getContextApi("testPlugin")
  );

  return <Map />;
};

export default Plugin;
