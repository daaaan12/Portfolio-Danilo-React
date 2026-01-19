import type { Metadata } from "next";
import { Kanit, Libre_Baskerville, Mukta } from "next/font/google";
import "./scss/global.scss";

const kanit = Kanit({
  weight: ['300'],
  subsets: ["latin"],
  variable: "--font-kanit",
});

const libreBaskerville = Libre_Baskerville({
  weight: ['700'],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
});

const mukta = Mukta({
  weight: ['200'],
  subsets: ["latin"],
  variable: "--font-mukta",
});

export const metadata: Metadata = {
  title: "Portfólio - Danilo",
  description: "Conheça meu portfólio destacando habilidades em HTML, CSS, JavaScript e React, com aprimoramentos visuais usando SCSS e Bootstrap. Explore uma variedade de projetos com componentes bem estruturados e estilizados para uma experiência de usuário excepcional.",
  icons: {
    icon: '/favd1.png',
    apple: '/favd1.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} ${libreBaskerville.variable} ${mukta.variable}`}>
        {children}
      </body>
    </html>
  );
}
