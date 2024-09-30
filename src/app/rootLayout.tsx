import localFont from "next/font/local";
import "../globals.css";

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
      <head>
        <link rel="icon" href="/favicon.ico?v=5" sizes="any" />
      </head>
      <body className={`${archivoBlack.variable} ${notoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
