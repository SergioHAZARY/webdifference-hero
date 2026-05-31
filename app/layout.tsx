import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebDifference — Créer un site web vraiment unique",
  description:
    "Design moderne, SEO solide, Suivi complet : on construit un site qui retient vos visiteurs et vous apporte des résultats.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}