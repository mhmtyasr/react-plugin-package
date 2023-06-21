import * as CesiumWidgets from "@cesium/widgets";
import * as CesiumEngine from "@cesium/engine";
import * as React from "react";
import Viewer from "../Resium/Viewer";
import LabelCollection from "../Resium/LabelCollection";
import Label from "../Resium/Label";

const Map = ({ getContextApi }: any) => {
  const { missionData, handleAddMissionData } = React.useContext(
    getContextApi("testPluginWithProvider")
  );

  const center = CesiumEngine.Cartesian3.fromDegrees(-75.59777, 40.03883);

  return (
    <Viewer full>
      <LabelCollection
        modelMatrix={CesiumEngine.Transforms.eastNorthUpToFixedFrame(center)}
      >
        <Label
          fillColor={CesiumEngine.Color.ORANGE}
          position={new CesiumEngine.Cartesian3(0.0, 0.0, 0.0)}
          text="Cesium"
        />
      </LabelCollection>
    </Viewer>
  );
};

export default Map;
