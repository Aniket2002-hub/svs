"use client";

import Head from "next/head";

const SEO = ({
  pageTitle,
  description,
  font,
  keywords,
  articleData,
  canonical,
}) => {
  // Determine the OG image
  const ogImage = "https://svsconstructions.com/Assets/logooooo.png";
  const ogImageWidth = articleData?.imageWidth || 430;
  const ogImageHeight = articleData?.imageHeight || 430;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} key="desc" />

      <meta name="keywords" content={keywords} key="keywords" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      ></link>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="canonical"
        href={canonical || "https://svsconstructions.com/"}
        key="canonical"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/assets/images/icon.webp" />

      {/* Open Graph Meta Tags */}
      <meta property="og:image" content={ogImage} key="og:image" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://svsconstructions.com/" />
      <meta
        property="og:title"
        content={
          pageTitle ||
          "SVS Construction: Quality Building & Infrastructure Solution"
        }
      />
      <meta
        property="og:description"
        content={
          description ||
          "SVS Construction provides dependable, high-quality residential and layout projects. We focus on innovation, quality construction, and customer trust, all tailored to your vision."
        }
      />
      <meta property="og:image:width" content={ogImageWidth.toString()} />
      <meta property="og:image:height" content={ogImageHeight.toString()} />
      <meta property="og:site_name" content="" />
    </Head>
  );
};

export default SEO;
