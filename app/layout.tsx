import type { Metadata } from "next";
import Script from "next/script";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
// import { CRISP_WEBSITE_ID } from "@/lib/config";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GetSetTime – Smart Scheduling App for Booking Automation",
  description: "Smart appointment automation for doctors, clinics, salons, and service professionals. Set up fast, reduce no-shows, and start scheduling automatically. Try GetSetTime - A Next-Gen Scheduling App and free demo available today.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager — injects gtm.js (runs from head) */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WBQPQS8H');
          `}
        </Script>
        
        {/* FastBots — GetSetTime support chat (ID from lib/config or NEXT_PUBLIC_FASTBOTS_BOT_ID) */}
        {/* <script defer src="https://app.fastbots.ai/embed.js" data-bot-id="cmnh1yilz091ipa1pl120d4d6"></script> */}
        
        {/* Crisp — GetSetTime support chat (ID from lib/config or NEXT_PUBLIC_CRISP_WEBSITE_ID) */}
        {/* <Script id="crisp-chat" strategy="afterInteractive">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="${CRISP_WEBSITE_ID}";
            (function(){var d=document,s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
          `}
        </Script> */}
      </head>

      <body className={`${roboto.variable}`}>
        {/* Google Tag Manager (noscript) fallback — first thing under body */}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=GTM-WBQPQS8H`} height={0} width={0} style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager"/>
        </noscript>

        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}