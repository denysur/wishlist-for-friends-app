import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import localFont from "next/font/local";
import { ThemeProvider } from "@mui/material";
import "@/globals.css";
import theme from "@/theme";
import { Locale } from "@/types";
import { dir } from "i18next";
import { Metadata } from "next";

const archivoBlack = localFont({
  src: "../../fonts/ArchivoBlack-Regular.ttf",
  variable: "--font-archivo-black",
  weight: "400",
});
const notoSans = localFont({
  src: "../../fonts/NotoSans-VariableFont_wdth,wght.ttf",
  variable: "--font-noto-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Wishlist For Friends",
  description:
    "This application is a tool that allows users to create and manage lists of desired items or services. These applications are popular among shoppers, gift enthusiasts, and people who want to plan their purchases.",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={`${archivoBlack.variable} ${notoSans.variable}`}>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            {children}
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
