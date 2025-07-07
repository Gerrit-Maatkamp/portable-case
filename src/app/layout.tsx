import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gerrit Maatkamp | Full-Stack Developer & Product Designer",
  description:
    "Full-stack developer and product designer specializing in TypeScript, React, and payment platforms. Based in Anacortes, WA.",
  keywords:
    "full-stack developer, product designer, TypeScript, React, UX/UI, payment platforms, Angular, PostgreSQL, AWS",
  authors: [{ name: "Gerrit Maatkamp" }],
  creator: "Gerrit Maatkamp",
  metadataBase: new URL("https://www.gerrit-maatkamp.com"),
  openGraph: {
    title: "Gerrit Maatkamp | Full-Stack Developer & Product Designer",
    description:
      "Full-stack developer and product designer specializing in TypeScript, React, and payment platforms. Turning caffeine into code and Figma mockups into pixel-perfect reality.",
    url: "https://www.gerrit-maatkamp.com",
    siteName: "Gerrit Maatkamp Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gerrit Maatkamp - Full-Stack Developer & Product Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerrit Maatkamp | Full-Stack Developer & Product Designer",
    description:
      "Full-stack developer and product designer specializing in TypeScript, React, and payment platforms.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nositelinkssearchbox: false,
    notranslate: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.gerrit-maatkamp.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gerrit Maatkamp",
              jobTitle: "Full-Stack Developer & Product Designer",
              description:
                "Full-stack developer and product designer specializing in TypeScript, React, and payment platforms.",
              url: "https://www.gerrit-maatkamp.com",
              sameAs: [
                "https://linkedin.com/in/gerritmaatkamp",
                "https://github.com/Gerrit-Maatkamp",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Anacortes",
                addressRegion: "WA",
                addressCountry: "US",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"system"}
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
