export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  PROFILE: "/dashboard/profile",
  SETTINGS: "/dashboard/settings",
} as const;

export type RouteKey = keyof typeof ROUTES;
