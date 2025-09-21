'use client';
import { useRouter } from "next/router";
import { useState } from "react";

const LOCALES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "pt", label: "Português (PT)", flag: "🇵🇹" },
  { code: "pt-BR", label: "Português (BR)", flag: "🇧🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" }
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const [current, setCurrent] = useState(router.locale || "en");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setCurrent(newLocale);
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };
  return (
    <div className="relative">
      <select
        value={current}
        onChange={handleChange}
        className="appearance-none rounded-md border px-2 py-1 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 pr-8"
      >
        {LOCALES.map(({ code, label, flag }) => (
          <option key={code} value={code}>
            {flag} {label}
          </option>
        ))}
      </select>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">▼</span>
    </div>
  );
}
