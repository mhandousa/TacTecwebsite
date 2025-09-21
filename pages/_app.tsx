import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import "../styles/globals.css";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps, router }: AppProps & { router: any }) {
  const r = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag !== "undefined") {
        window.gtag("event", "page_view", { page_path: url });
      }
    };
    r.events.on("routeChangeComplete", handleRouteChange);
    return () => { r.events.off("routeChangeComplete", handleRouteChange); };
  }, [r.events]);

  return (
    <>
      {/* Google Analytics */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      <NextIntlProvider messages={pageProps.messages} locale={router.locale} defaultLocale="en">
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  );
}
