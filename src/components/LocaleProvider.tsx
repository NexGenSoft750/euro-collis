"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Messages = Record<string, unknown>;

const LocaleContext = createContext<{ locale: Locale; messages: Messages } | null>(null);

export default function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const [locale] = useState<Locale>(initialLocale);
  const [messages, setMessages] = useState<Messages>({});

  useEffect(() => {
    let canceled = false;
    import(`../locales/${locale}.json`)
      .then((m) => {
        if (!canceled) setMessages(m.default ?? m);
      })
      .catch(() => {
        // fallback to initialLocale
        if (!canceled && locale !== initialLocale) {
          import(`../locales/${initialLocale}.json`).then((m) => setMessages(m.default ?? m));
        }
      });
    return () => {
      canceled = true;
    };
  }, [locale, initialLocale]);

  return (
    <LocaleContext.Provider value={{ locale, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LocaleContext);
  if (!ctx) return (key: string) => key;

  return (key: string) => {
    // simple dot-path resolver
    const parts = key.split(".");
    let cur: unknown = ctx.messages;
    for (const p of parts) {
      if (cur && typeof cur === "object") {
        const obj = cur as Record<string, unknown>;
        if (p in obj) {
          cur = obj[p];
          continue;
        }
      }
      return key;
    }
    return typeof cur === "string" ? cur : key;
  };
}
