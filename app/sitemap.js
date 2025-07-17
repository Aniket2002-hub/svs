// app/sitemap.js
import { headers } from "next/headers";

export default async function sitemap() {
  const headersList = headers();
  const domain = headersList?.get("host") || "svsconstructions.com";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${domain}`;

  
  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us/vision`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
        url: `${baseUrl}/about-us/our-leadership`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${baseUrl}/about-us/our-team`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${baseUrl}/project/completed`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${baseUrl}/project/ongoing/belmond`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${baseUrl}/news-media`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${baseUrl}/media-center/our-creation/our-videos`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/media-center/our-creation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/media-center/project-updates`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/media-solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/channel-partner-registration`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Assets/Balaji-bliss.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Assets/Kavya-Greens.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Assets/Girish-Residencey.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Assets/SVS-Central-Park-Phase-II-Broucher.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Assets/SVS-Marvel-Destiny.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Assets/Brochure%20-%20SVS%20-%20BELMOND.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    
  ];

  

  // Combine and return all routes
  return staticRoutes;
}
