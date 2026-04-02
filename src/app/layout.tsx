import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider"
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"

const fraunces = Fraunces({
  subsets:  ["latin"],
  weight:   ["400", "700", "900"],
  variable: "--font-display",
  display:  "swap",
});

const dmSans = DM_Sans({
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display:  "swap",
});

export const metadata: Metadata = {
  title:       "KJA Digital Marketing Solutions",
  description: "Professional digital marketing services based in Cordova, Cebu, Philippines.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}