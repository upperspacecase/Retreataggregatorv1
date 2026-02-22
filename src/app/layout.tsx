import type { Metadata } from "next";
import { SavedProvider } from "@/lib/saved-context";
import { Navigation } from "@/components/navigation";
import {
  SchemaMarkup,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/components/schema-markup";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Curated Calm \u2014 Wellness Retreats Worth the Journey",
    template: "%s | Curated Calm",
  },
  description:
    "Find your perfect wellness retreat from our personally vetted collection. Yoga, meditation, movement, and reset retreats in Bali, Europe, and beyond. Not thousands of options \u2014 just the right ones.",
  keywords: [
    "wellness retreats",
    "yoga retreat",
    "meditation retreat",
    "silent retreat",
    "wellness travel",
    "curated retreats",
    "retreat booking",
    "yoga retreat Bali",
    "meditation retreat Europe",
    "wellness vacation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Curated Calm",
    title: "Curated Calm \u2014 Wellness Retreats Worth the Journey",
    description:
      "A carefully curated collection of the world\u2019s most meaningful wellness retreats. Personally vetted. Editorially presented. Thoughtfully booked.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mountain landscape at sunrise \u2014 Curated Calm wellness retreats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curated Calm \u2014 Wellness Retreats Worth the Journey",
    description:
      "Find your perfect wellness retreat. Personally vetted. Editorially presented.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <SchemaMarkup
          schema={[generateOrganizationSchema(), generateWebSiteSchema()]}
        />
      </head>
      <body className="grain">
        <SavedProvider>
          <Navigation />
          <main role="main">{children}</main>
        </SavedProvider>
      </body>
    </html>
  );
}
