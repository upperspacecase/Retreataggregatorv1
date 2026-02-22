import type { Metadata } from "next";
import { SavedProvider } from "@/lib/saved-context";
import { Navigation } from "@/components/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curated Calm \u2014 Wellness Retreats Worth the Journey",
  description:
    "A carefully curated collection of the world\u2019s most meaningful wellness retreats. Not thousands of options \u2014 just the right ones.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">
        <SavedProvider>
          <Navigation />
          <main>{children}</main>
        </SavedProvider>
      </body>
    </html>
  );
}
