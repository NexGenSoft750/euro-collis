import type { Metadata } from "next";
import { Roboto, Noto_Sans_Tamil } from "next/font/google";
import "@/styles/tailwind/globals.css";
import "@/styles/scss/main.scss";
import { MainLayout } from "@/components/layouts";
import LocaleProvider from "@/components/LocaleProvider";
import { DEFAULT_LOCALE } from "@/lib/i18n";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-tamil",
})

export const metadata: Metadata = {
  title: "Euro Collis | Smart Logistics & Freight Solutions",
  description:
    "Euro Collis provides efficient, reliable, and technology-driven logistics, freight, and shipping solutions across Europe. Simplify your transport management today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body
        className={`${roboto.variable} ${notoSansTamil.variable}`}
        suppressHydrationWarning
      >
        <LocaleProvider initialLocale={DEFAULT_LOCALE}>
          <MainLayout>
            {children}
          </MainLayout>
        </LocaleProvider>
      </body>
    </html>
  );
}
