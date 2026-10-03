export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "release", path: "/release", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "story", path: "/story", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "media", path: "/media", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) =>
  item.path.replace(/^\//, ""),
);
