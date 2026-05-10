import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Provider from "@/Components/Hoc/Provider";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Sumrit Singh Portfolio",
  description: "Generated Portfolio using Nextjs 16v",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", font.className, "font-sans", geist.variable)} suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          {children}
        </Provider></body>
    </html>
  );
}
