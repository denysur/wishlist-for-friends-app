import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import localFont from "next/font/local";
import { ThemeProvider } from "@mui/material";
import "@/globals.css";
import theme from "@/theme";

const archivoBlack = localFont({
  src: "../fonts/ArchivoBlack-Regular.ttf",
  variable: "--font-archivo-black",
  weight: "400",
});
const notoSans = localFont({
  src: "../fonts/NotoSans-VariableFont_wdth,wght.ttf",
  variable: "--font-noto-sans",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivoBlack.variable} ${notoSans.variable}`}>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
