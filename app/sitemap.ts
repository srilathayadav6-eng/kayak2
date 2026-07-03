import { MetadataRoute } from "next";
import { PRODUCTS, INDUSTRIES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kayak.ai";

  const routes = [
    "",
    "/about",
    "/products",
    "/solutions",
    "/enterprise-ai",
    "/careers",
    "/blog",
    "/case-studies",
    "/contact",
    "/request-demo",
    "/privacy",
    "/terms",
    "/cookies",
    "/security",
    "/investors",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const solutionRoutes = INDUSTRIES.map((i) => ({
    url: `${baseUrl}/solutions/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...productRoutes, ...solutionRoutes];
}
