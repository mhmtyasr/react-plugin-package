import { useEffect, useRef, useState } from "react";
//@ts-ignore
import Viewer from "../Resium/Viewer";

type AppProps = {
};

const App = () => {
//   const viewer = useRef<CesiumWidgets.Viewer>();

//   const bingImage = new CesiumEngine.BingMapsImageryProvider({
//     url: "https://dev.virtualearth.net",
//     key:
//       "hGEV0ElLskiRIlZzgg2F~fhiQv6pgjLrqY2fA81Z5aA~AjSy2id6LLKDtprhaSwoo6awtO6F8NKXtVdGG9IxFAlFVTkrJqkQ7zMckQ9-EYtJ",
//     mapStyle: CesiumEngine.BingMapsStyle.AERIAL,
//   });

//   CesiumEngine.Ion.defaultAccessToken =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5MzkwZmRiNS1jMTRlLTRiNmYtOGFmYy02Yzc2NGJjM2MzYzkiLCJpZCI6MTQzNTIwLCJpYXQiOjE2ODU2MjAwNTd9.OYjbPf3v1Nt6PCqfW8Fp3ViPluFZw9InO2S4-OCYQwU";

//   var cesiumTerrain = new CesiumEngine.CesiumTerrainProvider({
//     url: CesiumEngine.IonResource.fromAssetId(1),
//   });

//   useEffect(() => {
//     CesiumEngine.Math.setRandomNumberSeed(3);

//     viewer.current = new CesiumWidgets.Viewer(
//       pluginApi.pluginUIManager.getRootElement(),
//       {
//         animation: false,
//         baseLayerPicker: false,
//         geocoder: false,
//         homeButton: false,
//         infoBox: false,
//         navigationInstructionsInitiallyVisible: false,
//         selectionIndicator: false,
//         timeline: false,
//         imageryProvider: bingImage,
//         terrainProvider: cesiumTerrain,
//         targetFrameRate: 15,
//         requestRenderMode: true,
//         fullscreenButton: true,
//         maximumRenderTimeChange: Infinity,
//       }
//     ) as CesiumWidgets.Viewer;

//     var scene: CesiumEngine.Scene = viewer.current.scene;
//     scene.globe.depthTestAgainstTerrain = true;
//     scene.globe.tileCacheSize = 1000;
//     scene.fog.enabled = false;
//     scene.screenSpaceCameraController.enableInputs = false;

//     var plane: any = viewer.current.entities.add({
//       name: "",
//       model: {
//         uri: pluginApi.systemApi.selectedAircraftApi.getAircraft3dModel(),
//         minimumPixelSize: 128,
//         maximumScale: 20000,
//         colorBlendMode: CesiumEngine.ColorBlendMode.MIX,
//         color: CesiumEngine.Color.YELLOW,
//       },
//       label: {
//         text: "",
//         font: "20px sans-serif",
//         fillColor: CesiumEngine.Color.YELLOW,
//         eyeOffset: new CesiumEngine.Cartesian3(5, -3, -100),
//       },
//     });

//     viewer.current.trackedEntity = plane;

//     setInterval(() => {
//       const telemetry: AircraftLocation = pluginApi.systemApi.selectedAircraftApi.getLocation();
//       if (!telemetry) return null;

//       viewer.current.camera.lookAt(
//         CesiumEngine.Cartesian3.fromDegrees(
//           telemetry?.longitude,
//           telemetry?.latitude,
//           egm96.egm96ToEllipsoid(
//             telemetry?.latitude,
//             telemetry?.longitude,
//             telemetry?.altitude
//           )
//         ),
//         new CesiumEngine.HeadingPitchRange(
//           CesiumEngine.Math.toRadians(telemetry?.yaw),
//           CesiumEngine.Math.toRadians(-10),
//           5
//         )
//       );

//       plane.position = CesiumEngine.Cartesian3.fromDegrees(
//         telemetry.longitude,
//         telemetry.latitude,
//         egm96.egm96ToEllipsoid(
//           telemetry.latitude,
//           telemetry.longitude,
//           telemetry.altitude
//         )
//       );

//       var heading = telemetry.yaw + 270;
//       if (heading >= 360) heading -= 360;

//       plane.orientation = CesiumEngine.Transforms.headingPitchRollQuaternion(
//         CesiumEngine.Cartesian3.fromDegrees(
//           telemetry.longitude,
//           telemetry.latitude,
//           egm96.egm96ToEllipsoid(
//             telemetry.latitude,
//             telemetry.longitude,
//             telemetry.altitude
//           )
//         ),
//         new CesiumEngine.HeadingPitchRoll(
//           CesiumEngine.Math.toRadians(heading),
//           CesiumEngine.Math.toRadians(telemetry.pitch),
//           CesiumEngine.Math.toRadians(telemetry.roll)
//         )
//       );
//     }, 500);

//     setInterval(() => {
//       //force re-render every 200 ms.
//       scene.requestRender();
//     }, 200);

//     // navigation.default(viewer.current, {});
//   }, []);

  return <Viewer full></Viewer>;
};

export default App;
