import * as CesiumWidgets from "@cesium/widgets";
import * as CesiumEngine from "@cesium/engine";
import * as React from "react";
import Viewer from "../Resium/Viewer";
import "cesium/Widgets/widgets.css";

const Map = ({ getContextApi }: any) => {
  const { missionData, handleAddMissionData } = React.useContext(
    getContextApi("testPluginWithProvider")
  );


  const ref = React.useRef<CesiumWidgets.Viewer>();

  const center = CesiumEngine.Cartesian3.fromDegrees(-75.59777, 40.03883);


  React.useEffect(() => {
    debugger;
  }, []);

  return (
    <Viewer full ref={ref}>
     
    </Viewer>
  );
};

export default Map;
