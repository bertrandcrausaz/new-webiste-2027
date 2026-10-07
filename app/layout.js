import "./globals.css";

export const metadata = {
  title: "Rhodes Wind Center — Windsurf & Wing Foil, Rhodes, Greece",
  description:
    "Windsurfing and wing foil holidays in Ialyssos, Rhodes — rental, lessons and accommodation in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
