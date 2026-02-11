import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Online Appointment Scheduling Software | getmeetingtime",
  description: "getmeetingtime is the modern scheduling platform that makes “finding time” a breeze. When connecting is easy, your teams can get more done.",
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

const GTM_SCRIPT = [
  "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':",
  "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],",
  "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=",
  "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);",
  "})(window,document,'script','dataLayer','",
  GTM_ID,
  "');",
].join("");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="select-none">
      
      <head>
        {/* Google Tag Manager — injects gtm.js (runs from head) */}
          <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: GTM_SCRIPT }} />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Google Tag Manager (noscript) fallback — first thing under body */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height={0}
              width={0}
              style={{ display: "none" as const, visibility: "hidden" as const }}
              title="Google Tag Manager"
            />
          </noscript>

        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
