import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const silkaMono = localFont({
  variable: "--font-silka-mono",
  display: "swap",
  src: [
    {
      path: "../public/fonts/silkamono-thin-webfont.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/silkamono-extralight-webfont.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/silkamono-light-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/silkamono-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/silkamono-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/silkamono-semibold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/silkamono-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/silkamono-black-webfont.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Latent Foundry",
  description: "this is the latent foundry",
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico` },
      {
        url: `${basePath}/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: `${basePath}/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: `${basePath}/apple-touch-icon.png`,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: `${basePath}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${silkaMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
