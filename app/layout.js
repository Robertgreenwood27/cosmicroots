// app/layout.js
export const metadata = {
  title: "Cosmic Roots",
  description: "An AI-readable headshop — Cosmic Roots 🌿",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
