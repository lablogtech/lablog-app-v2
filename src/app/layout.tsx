import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from "@mantine/core"
import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import "leaflet/dist/leaflet.css"
import "./globals.css"

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
  title: "LABLOG",
  description: "DNA Testing, NIPT & Genetic Screening in the Philippines",
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
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
