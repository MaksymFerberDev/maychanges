import { Footer, Header } from "@/components";
import clsx from "clsx";
import "./globals.css";
import localFont from "next/font/local";

const montExtraBold = localFont({
  src: "./fonts/montserrat-extrabold.woff",
  variable: "--font-montserrat-extrabold",
  weight: "100 900",
});

const montBold = localFont({
  src: "./fonts/montserrat-bold.woff",
  variable: "--font-montserrat-bold",
  weight: "100 900",
});

const montSemiBold = localFont({
  src: "./fonts/montserrat-semibold.woff",
  variable: "--font-montserrat-semibold",
  weight: "100 900",
});

const montMedium = localFont({
  src: "./fonts/montserrat-medium.woff",
  variable: "--font-montserrat-medium",
  weight: "100 900",
});

const montRegular = localFont({
  src: "./fonts/montserrat-regular.woff",
  variable: "--font-montserrat-regular",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Industrial Succession</title>
        <meta name="description" content='Industrial Succession' />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={clsx(
          montExtraBold.variable,
          montBold.variable,
          montSemiBold.variable,
          montMedium.variable,
          montRegular.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
