import type { MetadataRoute } from "next";
import { retreats } from "@/data/retreats";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://curatedcalm.com";

  const retreatUrls: MetadataRoute.Sitemap = retreats.map((retreat) => ({
    url: `${baseUrl}/retreat/${retreat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...retreatUrls,
    {
      url: `${baseUrl}/saved`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
