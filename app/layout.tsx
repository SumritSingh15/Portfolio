import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Provider from "@/Components/Hoc/Provider";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sumritsingh.dev"),
  title: "Sumrit Singh Portfolio",
  description: "Frontend Developer portfolio — React, Next.js, TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full dark", "antialiased", font.className, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f]">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
