import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anne Matarazzo | Portfólio ",
  description: "Portfólio da arquiteta Anne Matarazzo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: "#B48CDE" },
      }}
    >
      <html lang='pt'>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
