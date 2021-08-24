import { AnimatePresence } from "framer-motion";
import React from "react";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps, router }) {
  return (
    <CookiesProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </CookiesProvider>
  );
}

export default MyApp;
