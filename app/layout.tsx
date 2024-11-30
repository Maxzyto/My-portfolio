import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';

const font = Sora({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  // subset: ["latin"],
})

export const metadata: Metadata = {
  title: "Max Portfolio",
  description: "Max Skills with next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}
      >
        <ResponsiveNav />
        {children}
        
      </body>
    </html>
  );
}
