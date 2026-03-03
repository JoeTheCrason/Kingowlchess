export const metadata = {
  title: 'KnightOwl Chess',
  description: 'Play chess against Stockfish 18',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
