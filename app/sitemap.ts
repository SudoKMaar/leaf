import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "hourly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/courses`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/leaderboard`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/learn`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/quests`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/shop`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/lesson`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];
}
