import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jobportal",
  description: "Smart AI job portal for job seekers and employers, find your dream job or hire the best talent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
