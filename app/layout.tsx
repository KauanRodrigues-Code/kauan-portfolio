import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://kauanrodrigues.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kauan Rodrigues | Desenvolvedor Web",
  description:
    "Portfólio de Kauan Rodrigues, estudante de Engenharia de Software e desenvolvedor web.",
  keywords: [
    "Kauan Rodrigues",
    "Desenvolvedor Web",
    "Engenharia de Software",
    "Portfólio",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Kauan Rodrigues" }],
  openGraph: {
    title: "Kauan Rodrigues | Desenvolvedor Web",
    description:
      "Portfólio de Kauan Rodrigues, estudante de Engenharia de Software e desenvolvedor web.",
    url: siteUrl,
    siteName: "Kauan Rodrigues",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kauan Rodrigues | Desenvolvedor Web",
    description:
      "Portfólio de Kauan Rodrigues, estudante de Engenharia de Software e desenvolvedor web.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
