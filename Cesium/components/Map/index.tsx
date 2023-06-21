import * as CesiumWidgets from "@cesium/widgets";
import * as CesiumEngine from "@cesium/engine";
import * as React from "react";
import Viewer from "../Resium/Viewer";
import LabelCollection from "../Resium/LabelCollection/LabelCollection";
import Label from "../Resium/Label/Label";

const Map = ({ getContextApi }: any) => {
  const { missionData, handleAddMissionData } = React.useContext(
    getContextApi("testPluginWithProvider")
  );

  const ref = React.useRef<CesiumWidgets.Viewer>();

  const center = CesiumEngine.Cartesian3.fromDegrees(-75.59777, 40.03883);

  const bingImage = new CesiumEngine.BingMapsImageryProvider({
    url: "https://dev.virtualearth.net",
    key:
      "hGEV0ElLskiRIlZzgg2F~fhiQv6pgjLrqY2fA81Z5aA~AjSy2id6LLKDtprhaSwoo6awtO6F8NKXtVdGG9IxFAlFVTkrJqkQ7zMckQ9-EYtJ",
    mapStyle: CesiumEngine.BingMapsStyle.AERIAL,
  });

  CesiumEngine.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5MzkwZmRiNS1jMTRlLTRiNmYtOGFmYy02Yzc2NGJjM2MzYzkiLCJpZCI6MTQzNTIwLCJpYXQiOjE2ODU2MjAwNTd9.OYjbPf3v1Nt6PCqfW8Fp3ViPluFZw9InO2S4-OCYQwU";

  var cesiumTerrain = new CesiumEngine.CesiumTerrainProvider({
    url: CesiumEngine.IonResource.fromAssetId(1),
  });

  return (
    <Viewer
      full
      ref={ref}
      {...{
        animation: false,
        baseLayerPicker: false,
        geocoder: false,
        homeButton: false,
        infoBox: false,
        navigationInstructionsInitiallyVisible: false,
        selectionIndicator: false,
        timeline: false,
        imageryProvider: bingImage,
        terrainProvider: cesiumTerrain,
        targetFrameRate: 15,
        requestRenderMode: true,
        fullscreenButton: true,
        maximumRenderTimeChange: Infinity,
      }}
    >
      <LabelCollection
        modelMatrix={CesiumEngine.Transforms.eastNorthUpToFixedFrame(center)}
      >
        {missionData.map((mission: any) => {
          return (
            <Label
              fillColor={CesiumEngine.Color.ORANGE}
              position={
                new CesiumEngine.Cartesian3(Math.random() * 1000, 0.0, 0.0)
              }
              text={mission}
            />
          );
        })}
      </LabelCollection>
    </Viewer>
  );
};

export default Map;
