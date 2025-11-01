import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saivyy Technologies - AI Solutions & Innovation",
  description: "Pioneering the future with cutting-edge AI and Generative AI solutions. We transform businesses through intelligent automation and innovation.",
  keywords: "AI, Artificial Intelligence, Machine Learning, Automation, Generative AI, Data Analytics",
  authors: [{ name: "Saivyy Technologies" }],
  openGraph: {
    title: "Saivyy Technologies - AI Solutions & Innovation",
    description: "Transform your business with our comprehensive suite of AI-powered solutions designed to drive efficiency, innovation, and growth.",
    url: "https://saivyytechnologies.in",
    siteName: "Saivyy Technologies",
    images: [
      {
        url: "/saivvyMain.jpeg",
        width: 1200,
        height: 630,
        alt: "Saivyy Technologies - AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saivyy Technologies - AI Solutions & Innovation",
    description: "Transform your business with cutting-edge AI solutions",
    images: ["/saivvyMain.jpeg"],
    creator: "@SaivyyTech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
