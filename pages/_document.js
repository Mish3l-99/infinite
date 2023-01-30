import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";

import content from "../content.json";

export default function Document({ locale }) {
  // const { locale } = useRouter();

  const con = content.contents.find((c) => c.locale === locale);

  return (
    <Html>
      <Head>
        <meta name="description" content={con.description} />
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
