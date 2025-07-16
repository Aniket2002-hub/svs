"use client";
import { useState } from "react";
import Image from "next/image";
import SEO from "../../(Component)/Seo";

const Page = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("Infographics");

  const videoData = {
    Infographics: [
      {
        title: "In Harmony with Your Every Breath",
        date: "08-July-2025",
        thumbnail: "/Assets/Frame 77_V.jpg",
      },
      {
        title: "A Place Where Joy Grows & Memories Bloom",
        date: "07-July-2025",
        thumbnail: "/Assets/Frame 79 (1).jpg",
      },
      {
        title: "Live Where Families Bond Naturally",
        date: "06-July-2025",
        thumbnail: "/Assets/Frame 81 (1).jpg",
      },
      {
        title: "Strong Starts Here",
        date: "05-July-2025",
        thumbnail: "/Assets/Frame 82.jpg",
      },

      {
        title: "Early Hours Fresh Brew",
        date: "08-July-2025",
        thumbnail: "/Assets/Frame 76.jpg",
      },
      {
        title: "Golden Hours Timeless Moments",
        date: "12-June-2025",
        thumbnail: "/Assets/Frame 88.jpg",
      },
      {
        title: "Work with a view, Live with Balance",
        date: "12-June-2025",
        thumbnail: "/Assets/Frame 89.jpg",
      },
      {
        title: "Built for Life in Motion",
        date: "29-June-2025",
        thumbnail: "/Assets/Frame 110 (1).jpg",
      },

      {
        title: " A Destination of Peace,Purpose, and Premium Living",
        date: "22-May-2025",
        thumbnail: "/Assets/Frame 95.jpg",
      },
    ],
    Instagram: [
      {
        title: "Elevate Your Lifestyle with SVS Belmond",
        thumbnail: "/Assets/INSTA11.jpg",
        href: "https://www.instagram.com/p/DMFpfXvxDjE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        title: "SVS Belmond Transforming The Landscape Of Vizag",
        thumbnail: "/Assets/INSTA10.jpg",
        href: "https://www.instagram.com/p/DMFYj9XT6L9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
       {
        title: "SVS Belmond – Unlock Exclusive Benefits Designed for You",
        thumbnail: "/Assets/INSTA9.jpg",
        href: "https://www.instagram.com/p/DMFJBKDu60N/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
       {
        title: "Where Legacy Meets Location",
        thumbnail: "/Assets/INSTA7.jpg",
        href: "https://www.instagram.com/p/DMASNpuTedq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
       {
        title: "Bhogapuram The Future Takes Off Here",
        thumbnail: "/Assets/INSTA6.jpg",
        href: "https://www.instagram.com/p/DMAEbVnOz02/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        title: "Visakhapatnam – Where Beauty Meets Growth",
        thumbnail: "/Assets/INSTA5.jpg",
        href: "https://www.instagram.com/p/DL_qys8ur5p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        title: "Dreams Crafted with Precision – SVS Belmond",
        thumbnail: "/Assets/INSTA4.jpg",
        href: "https://www.instagram.com/p/DL90QJxz8sn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        title: "Effortless Investing with SVS Belmond",
        thumbnail: "/Assets/INSTA3.jpg",
        href: "https://www.instagram.com/p/DL9fpLYujbG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        title: "Building Beyond Concrete – The SVS Belmond Promise",
        thumbnail: "/Assets/INSTA12.png",
        href: "https://www.instagram.com/p/DL9ImLiT4uu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        title: "Belmond – Invest in Green Living, Grow Your Future",
        thumbnail: "/Assets/INSTA2.jpg",
        href: "https://www.instagram.com/p/DL2Kxm0zgFv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        title: "SVS Belmond Legacy – Building Dreams in Vizag",
        thumbnail: "/Assets/INSTA1.jpg",
        href: "https://www.instagram.com/p/DL1t0MxOjYs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        title: "Unlock Your Dream Investment in Vizag with SVS Belmond",
        thumbnail: "/Assets/land plot frame.jpeg",
        href: "https://www.instagram.com/p/DL1fqAhuguI/?utm_source=ig_web_button_share_sheet",
      },

      {
        title: "Vizag: India’s Next Big Growth Hub After Hyderabad!",

        thumbnail: "/Assets/vizag map frame.jpeg",
        href: "https://www.instagram.com/p/DLzo_PeTipd/?utm_source=ig_web_copy_link",
      },
      {
        title: "Nature's Calm, Right at Your Doorstep",

        thumbnail: "/Assets/grounded frame.jpeg",
        href: "https://www.instagram.com/p/DLy47FXTuCL/?utm_source=ig_web_copy_link",
      },
      {
        title: "Belmond – Where Families Find Their Forever Moments",

        thumbnail: "/Assets/where family frame.jpeg",
        href: "https://www.instagram.com/p/DLw8QnKItjq/?utm_source=ig_web_copy_link",
      },

      {
        title: "Belmond – Where Every Step Feels Like Home",

        thumbnail: "/Assets/A community frame.jpeg",
        href: "Uhttps://www.instagram.com/p/DLwMM8WPbHG/?utm_source=ig_web_copy_link",
      },
      {
        title: "Belmond – Where Every Moment Becomes a Memory",

        thumbnail: "/Assets/a place frame.jpeg",
        href: "https://www.instagram.com/p/DLuXd5rKCG1/?utm_source=ig_web_copy_link",
      },

      {
        title: "Live Fit, Live Smart at Belmond by SVS",

        thumbnail: "/Assets/strong frame.jpeg",
        href: "https://www.instagram.com/p/DLt2z--uVXf/?utm_source=ig_web_copy_link",
      },
      {
        title: "Step Into Wellness at SVS Belmond",

        thumbnail: "/Assets/Reclaim frame.jpeg",
        href: "https://www.instagram.com/p/DLpI4WKTimv/?utm_source=ig_web_copy_link",
      },
      {
        title: "Work Smart, Live Serene at Belmond by SVS",

        thumbnail: "/Assets/Frame 89.jpg",
        href: "https://www.instagram.com/p/DLmrICszgH8/?utm_source=ig_web_copy_link",
      },
    ],
    Facebook: [
      {
        title: "Elevate Your Lifestyle with SVS Belmond",
        thumbnail: "/Assets/INSTA11.jpg",
        href: " https://www.facebook.com/share/p/1EKNZBuk9U/",
      },
      {
        title: "SVS Belmond Transforming The Landscape Of Vizag",
        thumbnail: "/Assets/INSTA10.jpg",
        href: " https://www.facebook.com/share/p/16XkYYJKdX/",
      },
       {
        title: "SVS Belmond – Unlock Exclusive Benefits Designed for You",
        thumbnail: "/Assets/INSTA9.jpg",
        href: "https://www.facebook.com/share/p/15rGtXpBQ1/",
      },
       {
        title: "Where Legacy Meets Location",
        thumbnail: "/Assets/INSTA7.jpg",
        href: "https://www.facebook.com/share/p/16muKiruEn/",
      },
       {
        title: "Bhogapuram The Future Takes Off Here",
        thumbnail: "/Assets/INSTA6.jpg",
        href: " https://www.facebook.com/share/p/1GfvTXdQSM/",
      },
      {
        title: "Visakhapatnam – Where Beauty Meets Growth",
        thumbnail: "/Assets/INSTA5.jpg",
        href: " https://www.facebook.com/share/p/1NjxkaWddm/",
      },
      {
        title: "Dreams Crafted with Precision – SVS Belmond",
        thumbnail: "/Assets/INSTA4.jpg",
        href: "https://www.facebook.com/share/p/16V3g75BUh/",
      },
      {
        title: "Effortless Investing with SVS Belmond",
        thumbnail: "/Assets/INSTA3.jpg",
        href: " https://www.facebook.com/share/p/1EiH14DCki/",
      },
       {
        title: "Building Beyond Concrete – The SVS Belmond Promise",
        thumbnail: "/Assets/INSTA12.png",
        href: " https://www.facebook.com/share/p/19ZEhifEjz/",
      },
      
      
      // {
      //   title: "Belmond – Invest in Green Living, Grow Your Future",
      //   thumbnail: "/Assets/INSTA12.png",
      //   href: "https://www.facebook.com/share/p/16UrTTYKob/",
      // },
      {
        title: "SVS Belmond Legacy – Building Dreams in Vizag",
        thumbnail: "/Assets/INSTA1.jpg",
        href: " https://www.facebook.com/share/p/1CTr8bkBpF/",
      },
      {
        title: "Belmond – Invest in Green Living, Grow Your Future",
        thumbnail: "/Assets/land plot frame.jpeg",
        href: " https://www.facebook.com/share/p/16UrTTYKob/",
      },
      {
        title: "SVS Belmond Vizag – Plots Built for Life in Motion",
        date: "30-June-2025",
        thumbnail: "/Assets/Frame 110 (1).jpg",
        href: "https://www.facebook.com/share/p/16NmeZRUCD/",
      },
      {
        title: "Work Smart, Live Serene at Belmond by SVS",
        date: "01-June-2025",
        thumbnail: "/Assets/Frame 89.jpg",
        href: "https://www.facebook.com/share/p/1ZrZysKoff/",
      },
      {
        title: "Where Every Morning Feels Like a Golden Hour",
        date: "02-July-2025",
        thumbnail: "/Assets/Frame 88.jpg",
        href: "https://www.facebook.com/share/p/1AD9E9oGVa/",
      },
    ],
    Linkedin: [
      {
        title: "Elevate Your Lifestyle with SVS Belmond",
        thumbnail: "/Assets/INSTA11.jpg",
        href: " https://www.linkedin.com/feed/update/urn:li:activity:7350464216484433921",
      },
      {
        title: "SVS Belmond Transforming The Landscape Of Vizag",
        thumbnail: "/Assets/INSTA10.jpg",
        href: " https://www.linkedin.com/feed/update/urn:li:activity:7350464216484433921",
      },
       {
        title: "SVS Belmond – Unlock Exclusive Benefits Designed for You",
        thumbnail: "/Assets/INSTA9.jpg",
        href: " https://www.linkedin.com/feed/update/urn:li:activity:7350430449225129984",
      },
       {
        title: "Where Legacy Meets Location",
        thumbnail: "/Assets/INSTA7.jpg",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7349746968316760064",
      },
       {
        title: "Bhogapuram The Future Takes Off Here",
        thumbnail: "/Assets/INSTA6.jpg",
        href: " https://www.linkedin.com/feed/update/urn:li:activity:7349716562435588096",
      },
      {
        title: "Visakhapatnam – Where Beauty Meets Growth",
        thumbnail: "/Assets/INSTA5.jpg",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7349660280118759425",
      },
      {
        title: "Dreams Crafted with Precision – SVS Belmond",
        thumbnail: "/Assets/INSTA4.jpg",
        href: " https://www.linkedin.com/feed/update/urn:li:activity:7349399715634954240",
      },
      {
        title: "Effortless Investing with SVS Belmond",
        thumbnail: "/Assets/INSTA3.jpg",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7349354294879375360",
      },
       {
        title: "Building Beyond Concrete – The SVS Belmond Promise",
        thumbnail: "/Assets/INSTA12.png",
        href: " https://www.linkedin.com/feed/update/urn:li:activity:7349303721937248256",
      },
      
      
      {
        title: "Belmond – Invest in Green Living, Grow Your Future",
        thumbnail: "/Assets/INSTA2.jpg",
        href: " https://www.linkedin.com/feed/update/urn:li:activity:7348323252118704128",

      },
     
      {
        title: "SVS Belmond Legacy – Building Dreams in Vizag",
        thumbnail: "/Assets/INSTA1.jpg",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7348259667891974144",
      },
      {
        title: "Unlock Your Dream Investment in Vizag with SVS Belmond",

        thumbnail: "/Assets/land plot frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_landforsalevizag-svsbelmond-vizagrealestate-activity-7348228645863243777-6DGA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },

      {
        title: "Vizag: India’s Next Big Growth Hub After Hyderabad!",

        thumbnail: "/Assets/vizag map frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_svsbelmondvizag-investinvizag-vizagrealestate-activity-7347967424203276288-FPat?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },
      {
        title: "Nature's Calm, Right at Your Doorstep",

        thumbnail: "/Assets/grounded frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_belmondbysvs-wellnessliving-mindfulmornings-activity-7347861737276133376-2ZvX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },
      {
        title: "Belmond – Where Families Find Their Forever Moments",

        thumbnail: "/Assets/where family frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_belmondbysvs-wellnessliving-mindfulmornings-activity-7347861737276133376-2ZvX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },

      // {
      //   title: "Belmond – Where Families Find Their Forever Moments",

      //   thumbnail: "/Assets/INSTA12.png",
      //   href: "https://www.linkedin.com/posts/svs-constructions_belmondbysvs-familyliving-joyfulhomes-activity-7347587626595512320-wiU5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      // },
      {
        title: "Belmond – Where Every Step Feels Like Home",

        thumbnail: "/Assets/A community frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_belmondbysvs-communityliving-wellnesshomes-activity-7347481945292906496-p07n?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },
      {
        title: "Belmond – Where Every Moment Becomes a Memory",

        thumbnail: "/Assets/a place frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_belmondbysvs-familyfirsthomes-luxuryliving-activity-7347225241569398785-uEco?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },

      {
        title: "Live Fit, Live Smart at Belmond by SVS",

        thumbnail: "/Assets/strong frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_belmondbysvs-fitnesslifestyle-smartliving-activity-7347153431175884800-W3eQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },
      {
        title: "Step Into Wellness at SVS Belmond",

        thumbnail: "/Assets/Reclaim frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_svsbelmond-livewellvizag-wellnessliving-activity-7346489427709304832-ly5Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },
      {
        title: "Work Smart, Live Serene at Belmond by SVS",

        thumbnail: "/Assets/Frame 89.jpg",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7346142544415625217",
      },
    ],
    Twitter: [
      {
        title: "Elevate Your Lifestyle with SVS Belmond",
        thumbnail: "/Assets/INSTA11.jpg",
        href: "https://x.com/svsconstuctions/status/1944736133948354827",
      },
      {
        title: "SVS Belmond Transforming The Landscape Of Vizag",
        thumbnail: "/Assets/INSTA10.jpg",
        href: " https://x.com/svsconstuctions/status/1944698434016960996",
      },
       {
        title: "SVS Belmond – Unlock Exclusive Benefits Designed for You",
        thumbnail: "/Assets/INSTA9.jpg",
        href: "https://x.com/svsconstuctions/status/1944664817282998715 ",
      },
       {
        title: "Where Legacy Meets Location",
        thumbnail: "/Assets/INSTA7.jpg",
        href: "https://x.com/svsconstuctions/status/1943981358013198643",
      },
       {
        title: "Bhogapuram The Future Takes Off Here",
        thumbnail: "/Assets/INSTA6.jpg",
        href: " https://x.com/svsconstuctions/status/1943951011716219060",
      },
      {
        title: "Visakhapatnam – Where Beauty Meets Growth",
        thumbnail: "/Assets/INSTA5.jpg",
        href: "https://x.com/svsconstuctions/status/1943894639179878676",
      },
      {
        title: "Dreams Crafted with Precision – SVS Belmond",
        thumbnail: "/Assets/INSTA4.jpg",
        href: "https://x.com/svsconstuctions/status/1943633982215569750",
      },
      {
        title: "Effortless Investing with SVS Belmond",
        thumbnail: "/Assets/INSTA3.jpg",
        href: "https://x.com/svsconstuctions/status/1943588652744835292",
      },
       {
        title: "Building Beyond Concrete – The SVS Belmond Promise",
        thumbnail: "/Assets/INSTA12.png",
        href: " https://www.linkedin.com/feed/update/urn:li:activity:7349303721937248256",
      },
      {
        title: "Belmond – Invest in Green Living, Grow Your Future",
        thumbnail: "/Assets/INSTA2.jpg",
        href: "https://x.com/svsconstuctions/status/1943537982113484805",
      },
      {
        title: "SVS Belmond Legacy – Building Dreams in Vizag",
        thumbnail: "/Assets/INSTA1.jpg",
        href: "https://x.com/svsconstuctions/status/1943588652744835292",
      },
      
      {
        title: "Unlock Your Dream Investment in Vizag with SVS Belmond",

        thumbnail: "/Assets/land plot frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_landforsalevizag-svsbelmond-vizagrealestate-activity-7348228645863243777-6DGA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },

      {
        title: "Vizag: India’s Next Big Growth Hub After Hyderabad!",

        thumbnail: "/Assets/vizag map frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_svsbelmondvizag-investinvizag-vizagrealestate-activity-7347967424203276288-FPat?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },
      {
        title: "Nature's Calm, Right at Your Doorstep",

        thumbnail: "/Assets/grounded frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_belmondbysvs-wellnessliving-mindfulmornings-activity-7347861737276133376-2ZvX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },
      {
        title: "Belmond – Where Families Find Their Forever Moments",

        thumbnail: "/Assets/where family frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_belmondbysvs-wellnessliving-mindfulmornings-activity-7347861737276133376-2ZvX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },

      // {
      //   title: "Belmond – Where Families Find Their Forever Moments",

      //   thumbnail: "/Assets/A live frame.jpeg",
      //   href: "https://www.linkedin.com/posts/svs-constructions_belmondbysvs-familyliving-joyfulhomes-activity-7347587626595512320-wiU5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      // },
      {
        title: "Belmond – Where Every Step Feels Like Home",

        thumbnail: "/Assets/A community frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_belmondbysvs-communityliving-wellnesshomes-activity-7347481945292906496-p07n?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },
      {
        title: "Belmond – Where Every Moment Becomes a Memory",

        thumbnail: "/Assets/a place frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_belmondbysvs-familyfirsthomes-luxuryliving-activity-7347225241569398785-uEco?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },

      {
        title: "Live Fit, Live Smart at Belmond by SVS",

        thumbnail: "/Assets/strong frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_belmondbysvs-fitnesslifestyle-smartliving-activity-7347153431175884800-W3eQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },
      {
        title: "Step Into Wellness at SVS Belmond",

        thumbnail: "/Assets/Reclaim frame.jpeg",
        href: "https://www.linkedin.com/posts/svs-constructions_svsbelmond-livewellvizag-wellnessliving-activity-7346489427709304832-ly5Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECqMDABZpCDclieoAy9bPnYZn86JtcrKaU",
      },
      {
        title: "Work Smart, Live Serene at Belmond by SVS",

        thumbnail: "/Assets/Frame 89.jpg",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7346142544415625217",
      },
    ],
  };

  return (
    <>
      <title>Creative Portfolio – Brand Visuals & Media Assets</title>
      <meta
        name="description"
        content={
          "Explore a visual journey of our work, showcasing project highlights, construction progress, milestones, events, and more. Each creative reflects our commitment to quality, innovation, and the vision behind every SVS development."
        }
        key="desc"
      />
      <div className="overflow-hidden">
        <SEO
          pageTitle={"Creative Portfolio – Brand Visuals & Media Assets"}
          description={
            "Explore a visual journey of our work, showcasing project highlights, construction progress, milestones, events, and more. Each creative reflects our commitment to quality, innovation, and the vision behind every SVS development."
          }
        />

        {/* Hero Section */}
        <div
          data-aos="fade-right"
          className="relative w-full h-[270px] md:h-[300px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Banner_Our_Creatives2.png')",
          }}
        >
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h2
              data-aos="slide-right"
              data-aos-duration="1500"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black"
            ></h2>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 md:px-20 py-10 bg-white">
          <h2 className="text-3xl font-semibold text-gray-800  ">
            Our Creatives
          </h2>
          <div className="w-20 h-1 bg-black mt-2 mb-4 border-3 border font-bold mt-4" />
          <p className="text-gray-700 max-w-8xl">
            Explore a visual journey of our work, showcasing project highlights,
            construction progress, milestones, events, and more. Each creative
            reflects our commitment to quality, innovation, and the vision
            behind every SVS development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="px-6 md:px-20 pb-6 flex flex-wrap gap-2">
          {Object.keys(videoData).map((platform) => (
            <button
              key={platform}
              onClick={() => setSelectedPlatform(platform)}
              className={`px-4 py-2 border rounded ${
                selectedPlatform === platform
                  ? "bg-[#61796f] text-white"
                  : "bg-[#dff2ea] text-gray-700 hover:bg-gray-100"
              }`}
            >
              {platform}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="px-6 md:px-20 py-8 bg-[#dff2ea]">
          {videoData[selectedPlatform]?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoData[selectedPlatform].map((video, i) => {
                if (selectedPlatform === "Infographics") {
                  return (
                    <div
                      key={i}
                      className="bg-white rounded shadow hover:shadow-md transition overflow-hidden"
                    >
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-lg text-gray-800">
                          {video.title}
                        </h3>
                        <p className="text-sm text-gray-500">{video.date}</p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <a
                      key={i}
                      href={video.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded shadow hover:shadow-md transition"
                    >
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        width={500}
                        height={300}
                        className="w-full h-72 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-lg text-gray-800">
                          {video.title}
                        </h3>
                        <p className="text-sm text-gray-500">{video.date}</p>
                      </div>
                    </a>
                  );
                }
              })}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              No posts found for {selectedPlatform}.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
