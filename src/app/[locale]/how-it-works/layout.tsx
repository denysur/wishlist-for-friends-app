import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How it works - Wishlist for friends",
  description:
    "This application is a tool that allows users to create and manage lists of desired items or services. These applications are popular among shoppers, gift enthusiasts, and people who want to plan their purchases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
