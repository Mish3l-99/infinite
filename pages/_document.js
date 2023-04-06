import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";
import Script from "next/script";

import content from "../content.json";

export default function Document({ locale }) {
  // const { locale } = useRouter();

  const con = content.contents.find((c) => c.locale === locale);

  return (
    <Html>
      <Head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-F633627E6Z"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F633627E6Z', {
          page_path: window.location.pathname,});`,
          }}
        />

        {/* keywords */}
        <meta
          name="keywords"
          content="software agency, برمجة تطبيقات , برمجة مواقع , متاجر الكترونية"
        />

        {/* meta description */}
        <meta name="description" content={con.abt_txt} />

        <link rel="icon" href="/logo/favi.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
