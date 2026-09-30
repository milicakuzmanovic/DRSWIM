import "./globals.css";

export const metadata = {
  title: "DR SWIM Masters",
  description: "Više od treninga. Masters plivanje sa Vladimirom Antonijevićem.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}