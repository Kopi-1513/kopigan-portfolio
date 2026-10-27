import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thevarajah Kopigan | Computer Engineering Portfolio",
  description:
    "Official portfolio of Thevarajah Kopigan, a Computer Engineering undergraduate at the University of Sri Jayewardenepura, Sri Lanka. Explore projects, technical skills, education, and experience.",
  keywords: [
    "Thevarajah Kopigan",
    "Computer Engineering",
    "Portfolio",
    "University of Sri Jayewardenepura",
    "Next.js",
    "React",
    "Python",
    "IoT",
    "Software Development",
  ],
  authors: [{ name: "Thevarajah Kopigan" }],
  creator: "Thevarajah Kopigan",
  openGraph: {
    title: "Thevarajah Kopigan | Computer Engineering Portfolio",
    description:
      "Explore my projects, technical skills, education, and work in Computer Engineering.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}