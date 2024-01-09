import { Padauk } from "next/font/google";

// import Navbar from "$/components/Nav/Navbar";
export const paduk = Padauk({ weight: "400", subsets: ["latin"] });

import "$/styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${paduk.className}`}>
        <main>
          {/* <Navbar /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
