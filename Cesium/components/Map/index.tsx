import { Cartesian3 } from "@cesium/engine";
import Entity from "../Resium/Entity";
import Viewer from "../Resium/Viewer";
import * as React from "react";

const Map = ({ getContextApi }: any) => {
  const { missionData, handleAddMissionData } = React.useContext(
    getContextApi("testPlugin")
  );

  return (
    <Viewer full>
      {missionData.map((item: any, index: number) => {
        return (
          <Entity
            description={item}
            name={item}
            point={{ pixelSize: 10 }}
            position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
          />
        );
      })}
    </Viewer>
  );
};

export default Map;
