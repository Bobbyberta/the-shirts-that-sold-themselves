import "@/styles/globals.css";
import { EB_Garamond, IBM_Plex_Mono } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${garamond.variable} ${plexMono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

