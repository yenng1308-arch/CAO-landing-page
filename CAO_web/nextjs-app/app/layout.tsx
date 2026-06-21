import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dây cổ Glamorosa – Fine Jewellery Hoa Kết Nối | CAO Fine Jewellery",
  description: "Khám phá dây cổ Glamorosa từ CAO Fine Jewellery – tác phẩm fine jewellery lấy cảm hứng từ sắc hoa và nhịp kết nối, chế tác tinh xảo từ chất liệu tinh tuyển.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
