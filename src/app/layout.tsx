import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SimpliRide | Safe & Affordable City Rides",
  description: "Modern ride booking experience for safe, reliable and affordable travel.",
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
