import {
  CesiumWidget,
  Scene,
  Globe,
  Camera,
  ScreenSpaceEventHandler,
  Entity,
  DataSourceCollection,
  DataSource,
  EntityCollection,
  ImageryLayerCollection,
  PrimitiveCollection,
  BillboardCollection,
  LabelCollection,
  PolylineCollection,
  PointPrimitiveCollection,
  CloudCollection,
} from "@cesium/engine";

import {
  Viewer,
} from "@cesium/widgets";
import { createContext, useContext } from "react";

import EventManager, { eventManagerContextKey } from "./EventManager";

export type Context = {
  viewer?: Viewer;
  cesiumWidget?: CesiumWidget;
  scene?: Scene;
  globe?: Globe;
  camera?: Camera;
  screenSpaceEventHandler?: ScreenSpaceEventHandler;
  entity?: Entity;
  dataSourceCollection?: DataSourceCollection;
  dataSource?: DataSource;
  entityCollection?: EntityCollection;
  imageryLayerCollection?: ImageryLayerCollection;
  primitiveCollection?: PrimitiveCollection;
  billboardCollection?: BillboardCollection;
  labelCollection?: LabelCollection;
  polylineCollection?: PolylineCollection;
  pointPrimitiveCollection?: PointPrimitiveCollection;
  cloudCollection?: CloudCollection;
  [eventManagerContextKey]?: EventManager;
};

export const CesiumContext = createContext<any>({});
export const { Provider, Consumer } = CesiumContext;
export const useCesium = (): Context => useContext(CesiumContext) || {};
