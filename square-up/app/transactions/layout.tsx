import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Square Up",
  description: "Generated by create next app",
  icons: "/AI-Images/Icon Wallet.svg"
};

export default function Layout({children,}: {children: React.ReactNode}) {
  return (
    children
  );
}
