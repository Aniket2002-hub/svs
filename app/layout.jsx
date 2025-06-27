import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from './(Component)/Layout/Footer';
import Header from './(Component)/Layout/Header';
import AOSInit from "./(Component)/AOSInit";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Experience | Demo",
  description: "Hero section with headline and sub-tagline",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <AOSInit /> {/* Initialize AOS here */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
