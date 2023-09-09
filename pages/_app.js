import { useRouter } from "next/router";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

import TagManager from "react-gtm-module";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const font = locale === "ar" ? "Noto Naskh Arabic" : "Ubuntu";
  const dir = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    TagManager.initialize({ gtmId });
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <>
      <style>
        {`\
          body{\
            font-family: ${font}, serif !important;\
          }\
          `}
      </style>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
