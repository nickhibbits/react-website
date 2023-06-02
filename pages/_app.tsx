import { AppProps } from "next/app";
import { Padauk, Righteous } from "next/font/google";
import "$/styles/globals.scss";
import Navbar from "$/components/Nav/Navbar";
import { useEffect, useState } from "react";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const paduk = Padauk({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  const [introComplete, updateIntroComplete] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

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

      {loading ? (
        <div className="">Loading</div>
      ) : (
        <Component {...pageProps} updateIntroComplete={updateIntroComplete} />
      )}
    </>
  );
}
