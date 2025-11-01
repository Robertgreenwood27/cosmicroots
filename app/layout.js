import "./globals.css";

export const metadata = {
  title: "Cosmic Roots - Stay grounded. Stay cosmic.",
  description:
    "AI-native storefront for handcrafted glassware, incense, tapestries, and stickers. An experiment in AI-readable commerce.",
  keywords: [
    "AI-native commerce",
    "handcrafted",
    "artisan",
    "glassware",
    "incense",
    "tapestries",
    "stickers",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
