import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next13 Discord",
  description: "A discord clone built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={sans.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
