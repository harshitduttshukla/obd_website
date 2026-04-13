import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OBD Smart | Advanced Vehicle Diagnostics & Fleet Management",
  description: "Next-generation on-board diagnostics platform for smart vehicle management. Real-time data, predictive maintenance, and seamless fleet control.",
  keywords: ["OBD", "Vehicle Diagnostics", "Fleet Management", "Automotive Software", "Car Health", "Predictive Maintenance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-screen bg-white text-slate-900 selection:bg-brand-primary/10 selection:text-brand-primary">
        {children}
      </body>
    </html>
  );
}

