import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: "Sachin Eduskills Pvt. Ltd.",
  description:
    "Join Sachin Eduskills Pvt. Ltd., a recognized company offering free skill-based education, helping underprivileged youth unlock real career opportunities. Enroll in digital, vocational, and professional courses today.",
  keywords: [
    "skill training",
    "free government courses",
    "skill development India",
    "vocational training",
    "youth empowerment programs",
    "digital literacy training",
    "free education NGO",
    "Sachin Eduskills Pvt. Ltd.",
    "upsdm",
    "pmkvy",
    "ddugky",
    "upnulm",
    "sepl",
    "upnulm",
  ],
  authors: [{ name: "Sachin Eduskills Pvt. Ltd." }],
  creator: "Sachin Eduskills Pvt. Ltd.",
  metadataBase: new URL("https://sachineduskills.com"),
  openGraph: {
    title: "Free Govt. Certified Training | Sachin Eduskills Pvt. Ltd.",
    description:
      "Join Sachin Eduskills Pvt. Ltd., a recognized company offering free skill-based education, helping underprivileged youth unlock real career opportunities. Enroll in digital, vocational, and professional courses today.",
    url: "https://sachineduskills.com",
    siteName: "Sachin Eduskills",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <Head />
      <body className="bg-white text-black antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
