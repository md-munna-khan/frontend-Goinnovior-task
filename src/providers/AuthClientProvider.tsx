"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export type User = {
  id: string;
  name?: string | null;
  email?: string | null;
 photoUrl?: string | null;
};

type AuthContextValue = {
  user: User | null;
  setUser: (u: User | null) => void;
  logout: () => Promise<void>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProviderClient = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadMe = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_BASE_API}/auth/me`;

        const doFetch = async () => {
          const res = await fetch(url, { credentials: "include" });
          if (!res.ok) return null;
          const data = await res.json();
          return data?.user ?? data ?? null;
        };

        // try initial fetch
        let remoteUser = await doFetch();

        // if no user returned, retry a few times (useful after OAuth redirect where cookie may become available)
        if (!remoteUser) {
          const maxRetries = 6;
          for (let i = 0; i < maxRetries && !remoteUser; i++) {
            // small backoff
            await new Promise((r) => setTimeout(r, 500));
            remoteUser = await doFetch();
          }
        }

        if (!remoteUser) {
          setUser(null);
        } else {
          // normalize keys
          const remote = remoteUser as unknown as Record<string, unknown>;
          const safe = (k: string) => {
            const v = remote[k];
            return typeof v === "string" ? v : undefined;
          };

          const normalized: User = {
            id: safe("id") ?? safe("_id") ?? "",
            name: safe("name") ?? safe("fullName") ?? null,
            email: safe("email") ?? null,
           photoUrl: safe(" photoUrl") ?? safe("picture") ?? safe("avatar") ?? null,
          };
          setUser(normalized);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadMe();
  }, []);

  const logout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch {}
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx =  useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProviderClient");
  }
  return ctx;
};
