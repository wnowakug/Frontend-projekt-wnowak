"use client";

import { useState, ReactNode } from "react";
import { translations } from "@/i18n/translations";

type Lang = "pl" | "en";

type Props = {
  children: (
    t: (key: string) => string,
    lang: Lang,
    setLang: (l: Lang) => void
  ) => ReactNode;
};

export default function I18nShell({ children }: Props) {
  const [lang, setLang] = useState<Lang>("pl");

  const t = (key: string) => translations[lang][key] ?? key;

  return <>{children(t, lang, setLang)}</>;
}
