import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props: any) {
  const locale = props.__NEXT_DATA__?.locale ?? "en";
  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <Html lang={locale} dir={dir}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
