import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "NEXUS | Digital Marketing Agency",
  description:
    "Transform your brand with data-driven digital marketing strategies. SEO, social media, PPC, and content that converts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} h-full scroll-smooth`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
