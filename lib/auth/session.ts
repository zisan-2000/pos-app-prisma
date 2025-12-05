export type SessionUser = {
  id: string;
  email: string;
};

export async function getSession() {
  // TODO: integrate BetterAuth session retrieval.
  return null as SessionUser | null;
}

