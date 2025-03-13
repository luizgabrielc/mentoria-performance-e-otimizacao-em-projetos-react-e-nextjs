export interface RouteConfig {
  label: string;
  path: string;
  subRoutes?: RouteConfig[];
}