export const ABOUT_ROUTE = "about";
export const CITY_ROUTE = "webe-city";

export function routeFromHash(hash) {
  const match = /^#\/(about|webe-city)(?:$|[?#])/.exec(hash);
  return match?.[1] ?? null;
}
