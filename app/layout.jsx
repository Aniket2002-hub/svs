"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./(Component)/Layout/Footer";
import Header from "./(Component)/Layout/Header";
import AOSInit from "./(Component)/AOSInit";
import { usePathname } from "next/navigation";

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
            "SVS Constructions’ leadership is driven by strong knowledge of business strategies and hands-on experience in the real estate market. They come with a strong vision, values, and are extremely focused on quality construction and ensuring the delivery of each project on trust and long-term values. ",
          image: "/Assets/logooooo.png",
        };
      case "/about-us/vision":
        return {
          title: "Building a Better Tomorrow",
          description:
            "SVS Constructions is not only building projects but is also committed to building quality construction and sustainability. Their vision starts from a strong customer base to give state-of-the-art infrastructure that aligns with customer requirements.",
          image: "/Assets/logooooo.png",
        };
      case "about-us/our-team":
        return {
          title: " Collaborating for Excellence",
          description:
            "We value our relationships and are committed to fostering our partnership for the long term. Our partnership with IREED Academy brings expertise and innovation together that will help SVS deliver smart real estate solutions.",
          image: "/Assets/logooooo.png",
        };
      case "/project/completed":
        return {
          title: " Completed Real Estate Projects – Delivered with Trust",
          description:
            "SVS Constructions has successfully delivered our Hyderabad residential projects, and in the heart of every project, we embedded our unwavering commitment to Excellence and delivered premium spaces that reflect better quality.",
          image: "/Assets/logooooo.png",
        };
      case "/project/ongoing/belmond":
        return {
          title: "Belmond - Premium Plotted Project in Vizag ",
          description:
            "Belmond is one of the ongoing development projects by SVS Constructions. It is located at Rajapulova Junction in Vizag. Covering about 12.35 acres, this well-designed community includes 175 high-quality residential plots. Each plot aims to offer a mix of nature, comfort, and modern infrastructure.",
          image: "/Assets/logooooo.png",
        };
      case "/app/news-media":
        return {
          title: "News, Press Features & Media Coverage",
          description:
            "Explore our latest news, media mentions, and expert insights covering real estate trends across Vizag, Hyderabad, and other key cities. Also, explore how SVS Constructions is shaping the future of urban living.",
          image: "/Assets/logooooo.png",
        };
      case "/media-center/our-creation":
        return {
          title: "Creative Portfolio – Brand Visuals & Media Assets",
          description:
            "Explore a visual journey of our work, showcasing project highlights, construction progress, milestones, events, and more. Each creative reflects our commitment to quality, innovation, and the vision behind every SVS development.",
          image: "/Assets/logooooo.png",
        };
      case "/app/career":
        return {
          title: "Join Our Team & Shape the Future",
          description:
            "Join SVS Constructions for a rewarding career in real estate, where innovation, growth, and professional development are part of every role.",
          image: "/Assets/logooooo.png",
        };
      case "/app/channel-partner-registration":
        return {
          title: "Channel Partner Registration | Grow With Us",
          description:
            "Register as a channel partner with SVS Constructions to access new launches, marketing support, and exclusive benefits. We believe in growing together through strong, long-term collaborations built on trust.",
          image: "/Assets/logooooo.png",
        };
      case "/app/contact":
        return {
          title: "Contact Us – We’re Here to Help",
          description:
            "Reach out to SVS Constructions for inquiries, site visits, or partnership opportunities.",
          image: "/Assets/logooooo.png",
        };

      default:
        return {
          title:
            "SVS Construction: Quality Building & Infrastructure Solution.",
          description:
            "SVS Construction provides dependable, high-quality residential and layout projects. We focus on innovation, quality construction, and customer trust, all tailored to your vision.",
          image: "/Assets/logooooo.png",
        };
    }
  };

  const { title, description, image } = getOGDetails(pathName);

  return (
    <html lang="en">
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N65893CV');`,
        }}
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        property="og:url"
        content={`https://svsconstructions.com/${pathName}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="keywords"
        content="real estate, property, homes for sale, apartments, investment properties, real estate listings, property marketplace"
      />
      <meta name="author" content="SVS Constructions Team" />
      <meta name="publisher" content="SVS Constructions" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`https://svsconstructions.com/${pathName}`} />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N65893CV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        <AOSInit /> {/* Initialize AOS here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
