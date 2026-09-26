import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Ahsan Sagheer | AI Automation & Web Developer",
  description:
    "AI Automation and Web Developer based in Multan, Pakistan, building intelligent workflows, modern web applications and practical digital systems for businesses worldwide.",
  metadataBase: new URL("https://ahsansagheer.com"),
  openGraph: {
    title: "Muhammad Ahsan Sagheer | AI Automation & Web Developer",
    description:
      "AI Automation and Web Developer based in Multan, Pakistan, building intelligent workflows, modern web applications and practical digital systems for businesses worldwide.",
    url: "https://ahsansagheer.com",
    siteName: "Muhammad Ahsan Sagheer Portfolio",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Ahsan Sagheer — AI Automation & Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ahsan Sagheer | AI Automation & Web Developer",
    description:
      "AI Automation and Web Developer based in Multan, Pakistan, building intelligent workflows, modern web applications and practical digital systems for businesses worldwide.",
    images: ["/images/hero-bg.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} dark scroll-smooth`}>
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="bg-[#111113] text-[#F8FAFC] antialiased selection:bg-[#38BDF8] selection:text-[#111113]">
        {children}
      </body>
    </html>
  );
}
