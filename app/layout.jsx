// app/layout.js or app/layout.jsx
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./(Component)/Layout/Footer";
import Header from "./(Component)/Layout/Header";
import AOSInit from "./(Component)/AOSInit";
import { usePathname } from "next/navigation";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathName = usePathname();

  const getOGDetails = (path) => {
    switch (path) {
      case "/about-us/our-leadership":
        return {
          title: "Driving Real Estate Innovation.",
          description:
            "SVS Constructions’ leadership is driven by strong knowledge...",
          image: "/Assets/logooooo.png",
        };
      case "/about-us/vision":
        return {
          title: "Building a Better Tomorrow",
          description:
            "SVS Constructions is not only building projects...",
          image: "/Assets/logooooo.png",
        };
      case "about-us/our-team":
        return {
          title: "Collaborating for Excellence",
          description:
            "We value our relationships...",
          image: "/Assets/logooooo.png",
        };
      case "/project/completed":
        return {
          title: "Completed Real Estate Projects – Delivered with Trust",
          description:
            "SVS Constructions has successfully delivered...",
          image: "/Assets/logooooo.png",
        };
      case "/project/ongoing/belmond":
        return {
          title: "Belmond - Premium Plotted Project in Vizag",
          description:
            "Belmond is one of the ongoing development projects...",
          image: "/Assets/logooooo.png",
        };
      case "/app/news-media":
        return {
          title: "News, Press Features & Media Coverage",
          description:
            "Explore our latest news, media mentions...",
          image: "/Assets/logooooo.png",
        };
      case "/media-center/our-creation":
        return {
          title: "Creative Portfolio – Brand Visuals & Media Assets",
          description:
            "Explore a visual journey of our work...",
          image: "/Assets/logooooo.png",
        };
      case "/app/career":
        return {
          title: "Join Our Team & Shape the Future",
          description:
            "Join SVS Constructions for a rewarding career...",
          image: "/Assets/logooooo.png",
        };
      case "/app/channel-partner-registration":
        return {
          title: "Channel Partner Registration | Grow With Us",
          description:
            "Register as a channel partner with SVS Constructions...",
          image: "/Assets/logooooo.png",
        };
      case "/app/contact":
        return {
          title: "Contact Us – We’re Here to Help",
          description:
            "Reach out to SVS Constructions for inquiries...",
          image: "/Assets/logooooo.png",
        };
      default:
        return {
          title: "SVS Construction: Quality Building & Infrastructure Solution.",
          description:
            "SVS Construction provides dependable, high-quality residential...",
          image: "/Assets/logooooo.png",
        };
    }
  };

  const { title, description, image } = getOGDetails(pathName);

  return (
    <html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N65893CV');
            `,
          }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1YB46N0THN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1YB46N0THN');
            `,
          }}
        />

        {/* SEO Meta */}
        <meta name="google-site-verification" content="2WElGuALakFfNmWEiJPiGEl0qwwQr2j5CNum1mIcLKo" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`https://svsconstructions.com${pathName}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="keywords" content="real estate, property, homes for sale, apartments, investment properties" />
        <meta name="author" content="SVS Constructions Team" />
        <meta name="publisher" content="SVS Constructions" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://svsconstructions.com${pathName}`} />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N65893CV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        <AOSInit />
        {children}
        <Footer />
      </body>
    </html>
  );
}
