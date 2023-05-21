import { AppProps } from "next/app";
import { Padauk, Righteous } from "next/font/google";
import "$/styles/globals.scss";
import Navbar from "$/components/Nav/Navbar";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const paduk = Padauk({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
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
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
