import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Session } from "@/context/Session";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NEXT.js & Outseta",
  description: "An experiement with NEXT.js and Outseta",
};

const outsetaOptionsAsJSString = JSON.stringify({
  domain: process.env.NEXT_PUBLIC_OUTSETA_URL,
  load: "auth",
  /* Vital setting for a single page application */
  monitorDom: true,
  /* Do not load nocode module, handled by session */
  load: "auth,profile",
  auth: {
    id: "o_auth_embeds",
    mode: "embed",
    selector: ".o-auth-embed",
  },
  profile: {
    id: "o_profile_embed",
    mode: "embed",
    selector: ".o-profile-embed",
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Session>
          <Header />
          {children}
        </Session>

        <Script id="outseta-options" strategy="beforeInteractive">
          {`var o_options = ${outsetaOptionsAsJSString};`}
        </Script>

        <Script
          id="outseta-script"
          src="https://cdn.outseta.com/outseta.min.js"
          strategy="beforeInteractive"
          data-options="o_options"
        />
      </body>
    </html>
  );
}
