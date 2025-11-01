export const metadata = {
  title: 'Cosmic Roots v2 — AI-Readable Store',
  description: 'Zero-frontend artisan marketplace encoded as pure JSON',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
