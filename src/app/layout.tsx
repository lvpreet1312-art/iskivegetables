import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreshCut - Fresh Pre-cut Vegetables",
  description: "Hygienic, pre-cut vegetables delivered to your doorstep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="app-container" className="flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
