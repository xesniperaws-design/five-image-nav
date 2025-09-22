// Simple auth utilities. Replace LOGIN_API_URL with your real backend endpoint.

export type LoginResponse = {
  token: string;
  user?: { id: string; email?: string; name?: string };
};

const STORAGE_KEY = "auth_token";

export function setAuthToken(token: string) {
  try {
    localStorage.setItem(STORAGE_KEY, token);
  } catch {}
}

export function getAuthToken(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function clearAuthToken() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}

export function isLoggedIn(): boolean {
  return !!getAuthToken();
}

// Update this to your actual login API. It should return a JSON with a token field.
const LOGIN_API_URL = 
  (import.meta as any)?.env?.VITE_LOGIN_API_URL || 
  "/api/login"; // TODO: set VITE_LOGIN_API_URL in your env or replace with absolute URL

export async function loginUser(params: { email?: string; mobile?: string; password: string }): Promise<LoginResponse> {
  const res = await fetch(LOGIN_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Login failed with status ${res.status}`);
  }
  const json = (await res.json()) as LoginResponse;
  if (!json?.token) {
    throw new Error("Login API did not return a token");
  }
  setAuthToken(json.token);
  return json;
}
