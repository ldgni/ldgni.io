import { promises as fs } from "fs";
import type { MetadataRoute } from "next";
import path from "path";

async function getWritingSlugs() {
  const writingsDir = path.join(process.cwd(), "src/app/writings");

  try {
    // Read directly from the writings directory now that (posts) is removed
    const entries = await fs.readdir(writingsDir, {
      withFileTypes: true,
    });

    // Get only directories that don't start with "." or "("
    return entries
      .filter((entry) => entry.isDirectory())
      .filter(
        (entry) => !entry.name.startsWith(".") && !entry.name.startsWith("("),
      )
      .map((entry) => entry.name);
  } catch (error) {
    console.error("Error finding writing posts:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get writing slugs
  const slugs = await getWritingSlugs();

  // Create writing routes
  const writingRoutes = slugs.map((slug) => ({
    url: `https://ldgni.io/writings/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  // Static routes
  const staticRoutes = [
    {
      url: "https://ldgni.io",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://ldgni.io/writings",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://ldgni.io/projects",
      lastModified: new Date().toISOString(),
    },
  ];

  // Combine routes
  return [...staticRoutes, ...writingRoutes];
}
