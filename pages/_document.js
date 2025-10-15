import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="The Cotton Ghost: A Machine's Dream in Fabric and Code - An interactive story about AI, cotton, and the machines that dream" />
        <meta property="og:title" content="The Cotton Ghost" />
        <meta property="og:description" content="An interactive story experience about automated commerce and the ghosts in the machine" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

