import type { Metadata } from "next";
import { Playfair_Display, Poppins, Great_Vibes, EB_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-numeral",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tamarai Selvan weds Akshaya",
  description:
    "You are cordially invited to the wedding of E. Tamarai Selvan and P. Akshaya.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${greatVibes.variable} ${ebGaramond.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
