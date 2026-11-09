export interface Hub88LaunchParams {
  apiId: string;
  currency: string;
  language: string;
  token?: string;
  demo?: boolean;
}

export interface Hub88GameUrl {
  url: string;
  expiresAt: number;
}

// Stub — replace with real HTTP call once backend is wired up.
export async function fetchHub88GameUrl(
  _params: Hub88LaunchParams
): Promise<Hub88GameUrl> {
  throw new Error("Hub88 API not configured. Provide operator credentials.");
}
