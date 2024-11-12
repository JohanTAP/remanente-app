import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DashboardLayout from './dashboard/layout'

const geistSans = localFont( {
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
} );
const geistMono = localFont( {
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
} );

export const metadata: Metadata = {
  title: "Remanente App",
  description: "Aplicación para el estudio de la Biblia.",
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html lang="es" className="hide-scrollbar h-full w-full">
      <body
        className={ `${ geistSans.variable } ${ geistMono.variable } antialiased` }
      >
        <DashboardLayout >{ children }</DashboardLayout>
      </body>
    </html>
  );
}
