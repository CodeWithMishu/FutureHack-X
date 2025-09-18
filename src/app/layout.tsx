import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FutureHack-X 2026 | Innovate. Create. Future.",
  description:
    "Join FutureHack-X 2026 - The ultimate AI and innovation hackathon powered by SkillNet Learning. 19 tech domains, January 4, 2026. Shape the future!",
  keywords: [
    "hackathon",
    "AI",
    "innovation",
    "FutureHack-X",
    "SkillNet Learning",
    "technology",
    "2026",
  ],
  authors: [{ name: "SkillNet Learning" }],
  openGraph: {
    title: "FutureHack-X 2026 | Innovate. Create. Future.",
    description:
      "Join the ultimate AI and innovation hackathon. 19 tech domains await your brilliant solutions!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
