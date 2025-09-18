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
  metadataBase: new URL("https://future-hack-x.vercel.app"),
  title:
    "FutureHack-X 2026 | Ultimate AI & Innovation Hackathon | January 4, 2026",
  description:
    "Join FutureHack-X 2026 - The premier AI and innovation hackathon on January 4, 2026. 19 tech domains including Machine Learning, Blockchain, IoT, and more. Powered by SkillNet Learning. Register now for limited spots!",
  keywords: [
    "FutureHack-X",
    "FutureHack X",
    "Future Hackathon",
    "Future X",
    "2026 hackathon",
    "AI hackathon 2026",
    "innovation hackathon",
    "hackathon January 2026",
    "machine learning hackathon",
    "blockchain hackathon",
    "IoT hackathon",
    "tech competition 2026",
    "SkillNet Learning",
    "artificial intelligence contest",
    "programming competition",
    "developer hackathon",
    "coding competition 2026",
    "tech innovation contest",
    "Future Tech X",
    "hackathon registration 2026",
  ],
  authors: [{ name: "SkillNet Learning", url: "https://skillnetlearning.com" }],
  creator: "SkillNet Learning",
  publisher: "SkillNet Learning",
  category: "Technology",
  classification: "Hackathon Event",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://future-hack-x.vercel.app",
    siteName: "FutureHack-X 2026",
    title: "FutureHack-X 2026 | Ultimate AI & Innovation Hackathon",
    description:
      "Join the premier AI hackathon on January 4, 2026. 19 tech domains, innovative challenges, and amazing prizes await!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FutureHack-X 2026 - AI & Innovation Hackathon",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 1200,
        height: 1200,
        alt: "FutureHack-X 2026 Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SkillNetLearning",
    creator: "@SkillNetLearning",
    title: "FutureHack-X 2026 | Ultimate AI & Innovation Hackathon",
    description:
      "Join the premier AI hackathon on January 4, 2026. 19 tech domains, innovative challenges, and amazing prizes!",
    images: ["/twitter-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://future-hack-x.vercel.app",
  },
  other: {
    "fb:app_id": "your-facebook-app-id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#f97316" />
        <meta name="msapplication-TileColor" content="#f97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Structured Data for Events */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "FutureHack-X 2026",
              description:
                "The ultimate AI and innovation hackathon featuring 19 technology domains",
              startDate: "2026-01-04T00:00:00Z",
              endDate: "2026-01-04T23:59:59Z",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "To Be Announced",
              },
              organizer: {
                "@type": "Organization",
                name: "SkillNet Learning",
                url: "https://skillnetlearning.com",
              },
              offers: {
                "@type": "Offer",
                url: "https://future-hack-x.vercel.app",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                validFrom: "2024-01-01",
              },
              image: "https://future-hack-x.vercel.app/og-image.png",
              url: "https://future-hack-x.vercel.app",
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SkillNet Learning",
              url: "https://skillnetlearning.com",
              logo: "https://future-hack-x.vercel.app/skill-net-logo.png",
              sameAs: [
                "https://linkedin.com/company/skillnet-learning",
                "https://twitter.com/skillnetlearning",
              ],
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is FutureHack-X 2026?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FutureHack-X 2026 is the ultimate AI and innovation hackathon featuring 19 technology domains including Machine Learning, Blockchain, IoT, and more.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When is FutureHack-X 2026?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FutureHack-X 2026 will take place on January 4, 2026.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How many technology domains are featured?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FutureHack-X 2026 features 19 cutting-edge technology domains including AI for Governance, Machine Learning & MLOps, Blockchain & Web3, and more.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
