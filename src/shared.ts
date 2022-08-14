export type OPPEvent = CustomEvent<{
  channel: string;
  data?: Record<string, unknown>;
}>;

export type AssetURLs = {
  notfound: string;
};
