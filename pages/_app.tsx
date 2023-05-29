import { AppProps } from "next/app";
import { Padauk, Righteous } from "next/font/google";
import "$/styles/globals.scss";
import Navbar from "$/components/Nav/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const paduk = Padauk({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  const [introComplete, updateIntroComplete] = useState(false);

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${paduk.style.fontFamily};
          }
          .text {
            font-family: ${paduk.style.fontFamily};
          }

          h1,
          h2 {
            font-family: ${righteous.style.fontFamily};
          }
        `}
      </style>
      {introComplete ? <Navbar /> : null}
      <Component {...pageProps} updateIntroComplete={updateIntroComplete} />
    </>
  );
}
