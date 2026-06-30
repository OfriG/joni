import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "NEXUS | Digital Marketing Agency",
  description:
    "Transform your brand with data-driven digital marketing strategies. SEO, social media, PPC, and content that converts.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Hebrew:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
