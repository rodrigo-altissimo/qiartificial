import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QI Artificial — Estúdio de Design",
  description:
    "Estúdio de design que transforma ideias em experiências visuais memoráveis. Design systems, branding e interfaces que conectam marcas ao futuro.",
  openGraph: {
    title: "QI Artificial — Estúdio de Design",
    description:
      "Design systems, branding e interfaces que conectam marcas ao futuro.",
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
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
