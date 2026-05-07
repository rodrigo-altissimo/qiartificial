import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "QI Artificial — Clone & Ship Design Studio",
  description:
    "Extraímos o DNA visual de qualquer site e entregamos um brandbook completo como código vivo em 4 horas. Design systems, tokens e identidade visual com precisão automatizada.",
  openGraph: {
    title: "QI Artificial — Clone & Ship Design Studio",
    description:
      "Brandbooks navegáveis em código vivo. Extraímos 1500+ tokens de qualquer site e entregamos design systems completos.",
    url: "https://www.qiartificial.com.br",
    siteName: "QI Artificial",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`h-full antialiased ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
