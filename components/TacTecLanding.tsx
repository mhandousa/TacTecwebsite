import React from "react";
import Image from "next/image";
import Head from "next/head";
import Button from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const SectionTitle: React.FC<{ eyebrow: string; title: string; subtitle?: string }> = ({ eyebrow, title, subtitle }) => (
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">{eyebrow}</p>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h2>
    {subtitle && <p className="text-base md:text-lg text-muted-foreground">{subtitle}</p>}
  </div>
);

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold">{value}</div>
    <div className="text-xs md:text-sm text-muted-foreground mt-1">{label}</div>
  </div>
);

export default function TacTecLanding() {
  const t = useTranslations("common");
  return (
    <div className="min-h-screen">
      <Head>
        <title>{`TACTEC – ${t("hero.title")} ${t("hero.title_highlight")}`}</title>
        <meta name="description" content={t("hero.subtitle")} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TACTEC" />
        <meta property="og:title" content={`TACTEC – ${t("hero.title")} ${t("hero.title_highlight")}`} />
        <meta property="og:description" content={t("hero.subtitle")} />
        <meta property="og:image" content="/images/1_TacTec-Revolutionising-Football-Club-Management.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`TACTEC – ${t("hero.title")} ${t("hero.title_highlight")}`} />
        <meta name="twitter:description" content={t("hero.subtitle")} />
        <meta name="twitter:image" content="/images/1_TacTec-Revolutionising-Football-Club-Management.webp" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Ventio",
                  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
                  "logo": (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com") + "/images/Tactec-2nd-lockup.webp",
                  "sameAs": [
                    "https://linkedin.com/company/ventio",
                    "https://twitter.com/ventio",
                    "https://facebook.com/ventio",
                    "https://instagram.com/ventio"
                  ]
                },
                {
                  "@type": "Product",
                  "name": "TACTEC",
                  "brand": { "@type": "Organization", "name": "Ventio" },
                  "description": "TACTEC unifies sports science, medical, tactical, and operations into one clean platform.",
                  "image": (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com") + "/images/1_TacTec-Revolutionising-Football-Club-Management.webp"
                },
                {
                  "@type": "WebSite",
                  "name": "TACTEC",
                  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com") + "/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": t("faq.q1"),
                      "acceptedAnswer": { "@type": "Answer", "text": t("faq.a1") }
                    },
                    {
                      "@type": "Question",
                      "name": t("faq.q2"),
                      "acceptedAnswer": { "@type": "Answer", "text": t("faq.a2") }
                    },
                    {
                      "@type": "Question",
                      "name": t("faq.q3"),
                      "acceptedAnswer": { "@type": "Answer", "text": t("faq.a3") }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-gray-950/60 border-b">
        <div className="container py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/Tactec-2nd-lockup.webp" alt="TACTEC logo" width={36} height={36} className="rounded" />
            <span className="font-bold tracking-tight">TACTEC</span>
            <Badge variant="outline" className="rounded-full">{t("nav.club_os")}</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#challenge" className="hover:text-blue-600">{t("nav.challenge")}</a>
            <a href="#solution" className="hover:text-blue-600">{t("nav.solution")}</a>
            <a href="#features" className="hover:text-blue-600">{t("nav.features")}</a>
            <a href="#tech" className="hover:text-blue-600">{t("nav.tech")}</a>
            <a href="#pricing" className="hover:text-blue-600">{t("nav.pricing")}</a>
            <a href="#contact" className="hover:text-blue-600">{t("nav.contact")}</a>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="outline" className="hidden md:inline-flex">{t("nav.signin")}</Button>
            <Button
              className="rounded-md"
              onClick={() => {
                if (typeof window !== "undefined" && typeof (window as any).gtag !== "undefined") {
                  (window as any).gtag("event", "cta_demo_click", { label: "Request Demo" });
                }
              }}
            >
              {t("hero.cta.demo")}
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs mb-4">
              {t("hero.trusted")}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              {t("hero.title")} <span className="text-blue-600">{t("hero.title_highlight")}</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl">{t("hero.subtitle")}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                className="rounded-md"
                onClick={() => {
                  if (typeof window !== "undefined" && typeof (window as any).gtag !== "undefined") {
                    (window as any).gtag("event", "cta_start_click", { label: "Get Started" });
                  }
                }}
              >
                {t("hero.cta.start")}
              </Button>
              <Button
                variant="outline"
                className="rounded-md"
                onClick={() => {
                  if (typeof window !== "undefined" && typeof (window as any).gtag !== "undefined") {
                    (window as any).gtag("event", "cta_demo_click", { label: "Request Demo" });
                  }
                }}
              >
                {t("hero.cta.demo")}
              </Button>
              <div className="flex items-center gap-4">
                <Stat value="30%" label={t("hero.stats.injury")} />
                <Stat value="2×" label={t("hero.stats.sync")} />
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/1_TacTec-Revolutionising-Football-Club-Management.webp"
              alt="TACTEC revolutionising football club management"
              width={900} height={650} priority className="rounded-2xl border shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      {/* ... unchanged content ... */}

      {/* CTA */}
      <section id="contact" className="section bg-muted/30">
        <SectionTitle eyebrow={t("cta.eyebrow")} title={t("cta.title")} subtitle={t("cta.subtitle")} />
        <div className="container grid md:grid-cols-2 gap-6 items-center">
          <Image src="/images/19_Your-Club-in-your-Hand.webp" alt="Your club in your hand" width={1000} height={700} className="rounded-2xl shadow-lg" />
          <div className="flex flex-col gap-3">
            <Button
              className="rounded-md"
              onClick={() => {
                if (typeof window !== "undefined" && typeof (window as any).gtag !== "undefined") {
                  (window as any).gtag("event", "cta_footer_demo", { label: "Request Live Demo" });
                }
              }}
            >
              {t("cta.buttons.demo")}
            </Button>
            <Button
              variant="outline"
              className="rounded-md"
              onClick={() => {
                if (typeof window !== "undefined" && typeof (window as any).gtag !== "undefined") {
                  (window as any).gtag("event", "cta_footer_app", { label: "Try Player App" });
                }
              }}
            >
              {t("cta.buttons.app")}
            </Button>
            <Image src="/images/Tactec-Lock-1-2-1.webp" alt="Security lock TACTEC" width={420} height={300} className="rounded-lg border" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* ... unchanged content ... */}
    </div>
  );
}
