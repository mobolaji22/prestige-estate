import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Find Your Dream Home | Prestige Estates",
  description:
    "Search the latest property listings for sale and rent. Find houses, apartments, and commercial properties.",
  keywords:
    "real estate, property, homes for sale, homes for rent, apartments, commercial real estate, listings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
