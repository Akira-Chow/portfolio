import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akira Chow",
  description:
    "Akira Chow is a front end software engineer who builds intuitive, high-performance mobile and web experiences.",
  openGraph: {
    title: "Akira Chow",
    description:
      "Akira Chow is a front end software engineer who builds intuitive, high-performance mobile and web experiences.",
    url: "https://akirachow.dev",
    type: "website",
    images: "https://akirachow.dev/og.png",
    locale: "en_US",
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/favicon/android-chrome-512x512.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicon/android-chrome-192x192.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
  ],
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <div className="relative">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
