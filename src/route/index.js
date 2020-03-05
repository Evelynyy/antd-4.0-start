import React from "react";
import routesConfig from "./routeConfig";
import { RouteWithSubRoutes } from "./helper";

const routes = routesConfig.map((route, i) => (
  <RouteWithSubRoutes key={i} {...route} />
));

export default routes;
