import * as CesiumWidgets from "@cesium/widgets";
import * as CesiumEngine from "@cesium/engine";
import * as React from "react";

const Map = ({ getContextApi }: any) => {
  const { missionData, handleAddMissionData } = React.useContext(
    getContextApi("testPluginWithProvider")
  );
  const viewer = React.useRef<CesiumWidgets.Viewer>();

  const bingImage = new CesiumEngine.BingMapsImageryProvider({
      url: "https://dev.virtualearth.net",
      key: "hGEV0ElLskiRIlZzgg2F~fhiQv6pgjLrqY2fA81Z5aA~AjSy2id6LLKDtprhaSwoo6awtO6F8NKXtVdGG9IxFAlFVTkrJqkQ7zMckQ9-EYtJ",
      mapStyle: CesiumEngine.BingMapsStyle.AERIAL,
  });

  CesiumEngine.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5MzkwZmRiNS1jMTRlLTRiNmYtOGFmYy02Yzc2NGJjM2MzYzkiLCJpZCI6MTQzNTIwLCJpYXQiOjE2ODU2MjAwNTd9.OYjbPf3v1Nt6PCqfW8Fp3ViPluFZw9InO2S4-OCYQwU";

  var cesiumTerrain = new CesiumEngine.CesiumTerrainProvider({
      url: CesiumEngine.IonResource.fromAssetId(1),
  });


  React.useEffect(() => {
      CesiumEngine.Math.setRandomNumberSeed(3);

      viewer.current = new CesiumWidgets.Viewer(
          document.getElementById("cesium-plugin") as HTMLElement,
          {
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
          }
      ) as CesiumWidgets.Viewer;

      var scene: CesiumEngine.Scene = viewer.current.scene;
      scene.globe.depthTestAgainstTerrain = true;
      scene.globe.tileCacheSize = 1000;
      scene.fog.enabled = false;
      scene.screenSpaceCameraController.enableInputs = false;
  }, []);


  return <div id="cesium-plugin"></div>;
};

export default Map;
