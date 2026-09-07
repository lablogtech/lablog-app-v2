import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import Script from "next/script"
import { Suspense } from "react"
import { Box, ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from "@mantine/core"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import ScrollToTopOnNavigation from "@/components/shared/ScrollToTopOnNavigation"
import { siteUrl } from "@/lib/seo"
import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import "leaflet/dist/leaflet.css"
import "./globals.css"

const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-PMQZJJQF"
const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "9yT3QmKh9OdV1RNBWQkSrwOdB4g597REHoV8YcL3i5g"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LabLog Philippines Inc.",
  description:
    "Lablog is a healthcare technology company helping Filipino families and businesses across the Philippines access preventive healthcare packages, home service lab testing, and accurate and comprehensive DNA tests. With genetic testing services available nationwide through our partner clinic network, we combine advanced laboratory partnerships with a patient-first approach to make better health decisions easier today and sustainable for tomorrow.",
  image: `${siteUrl}/nav-logo.png`,
  "@id": "https://www.lablog.tech/",
  url: "https://www.lablog.tech/",
  telephone: "0956 064 8809",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 605, Corporate 101 Building, Mother Ignacia Ave, Diliman",
    addressLocality: "Quezon City",
    postalCode: "1103",
    addressCountry: "PH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 14.6373669,
    longitude: 121.0303712,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "16:00",
  },
  sameAs: [
    "https://www.facebook.com/lablog.tech/",
    "https://www.instagram.com/lablog.tech/",
    "https://www.linkedin.com/company/lablog-tech/",
    "https://www.lablog.tech/",
  ],
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
})

const theme = createTheme({
  fontFamily: "var(--font-inter), sans-serif",
  primaryColor: "blue",
  primaryShade: 6,
  colors: {
    blue: [
      "#e6f2ff",
      "#cce4ff",
      "#99c9ff",
      "#66adff",
      "#3392ff",
      "#0d7efc",
      "#067BF7",
      "#0469d4",
      "#0357b0",
      "#02458c",
    ],
    teal: [
      "#e6faf6",
      "#ccf6ed",
      "#99eddc",
      "#66e3ca",
      "#33dab9",
      "#10caa6",
      "#02B992",
      "#029d7c",
      "#018166",
      "#016550",
    ],
  },
  headings: {
    fontFamily: "var(--font-poppins), sans-serif",
    fontWeight: "600",
  },
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lablog | DNA Testing, NIPT & Genetic Screening Philippines",
    template: "%s | Lablog",
  },
  description:
    "Book DNA lab tests online across the Philippines with Lablog. Access NIPT, genetic testing, and confidential results at nationwide collection centers.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: googleSiteVerification,
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "Lablog",
    title: "Lablog | DNA Testing, NIPT & Genetic Screening Philippines",
    description:
      "Book DNA lab tests online across the Philippines with Lablog. Access NIPT, genetic testing, and confidential results at nationwide collection centers.",
    url: "/",
    images: [
      {
        url: "/hero.jpg",
        alt: "Lablog online laboratory testing services in the Philippines",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" {...mantineHtmlProps} className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <ColorSchemeScript />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      </head>
      <body className="siteBody">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <MantineProvider theme={theme}>
          <Box className="siteShell" bg="#fff">
            <Suspense fallback={null}>
              <ScrollToTopOnNavigation />
            </Suspense>
            <Header />
            <Box component="main" className="siteMain">
              {children}
            </Box>
            <Footer />
          </Box>
        </MantineProvider>
      </body>
    </html>
  )
}
