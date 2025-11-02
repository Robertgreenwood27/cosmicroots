// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Cosmic Roots - Mystical Goods & Glassware</title>
        <meta name="description" content="Cosmic Roots offers hand-blown glass pipes and premium incense. A mystical shop where good vibes meet good smoke." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}