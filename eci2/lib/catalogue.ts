import { profileProducts, profileCategories } from "./profile-products.ts";
export type Picture = { src: string; alt: string; caption?: string };
export type AreaSlug = "air" | "naval" | "land" | "software" | "search-and-rescue";
export type Area = {
  slug: AreaSlug;
  name: string;
  description: string;
  image: string;
  alt: string;
  categoryName: string;
  categorySlug: string;
};
export type Category = {
  slug: string;
  area: AreaSlug;
  name: string;
  description: string;
  images: Picture[];
  sample: boolean;
};
export type Product = {
  kind?: "product" | "solution" | "project";
  sourcePages?: number[];
  slug: string;
  area: AreaSlug;
  category: string;
  name: string;
  summary: string;
  description: string;
  images: Picture[];
  sample: boolean;
};
export const areas: Area[] = [
  {
    slug: "air",
    name: "Air",
    description: "Airport systems, communications and equipment for aviation environments.",
    image: "/images/air.jpg",
    alt: "Aircraft flying above desert terrain",
    categoryName: "Air equipment",
    categorySlug: "air-equipment",
  },
  {
    slug: "naval",
    name: "Naval",
    description: "Maritime platforms and systems for operations on and around the water.",
    image: "/images/naval.jpg",
    alt: "Naval vessel at sea",
    categoryName: "Naval equipment",
    categorySlug: "naval-equipment",
  },
  {
    slug: "land",
    name: "Land",
    description:
      "Monitoring, communications and infrastructure for facilities and field operations.",
    image: "/images/land.jpg",
    alt: "Uncrewed ground vehicle",
    categoryName: "Land equipment",
    categorySlug: "land-equipment",
  },
  {
    slug: "software",
    name: "Software",
    description: "Applications for radar, monitoring and a clearer operational picture.",
    image: "/images/threat-monitoring.jpg",
    alt: "Monitoring centre with a wall of operational displays",
    categoryName: "Radar & monitoring software",
    categorySlug: "radar-and-monitoring",
  },
  {
    slug: "search-and-rescue",
    name: "Search and Rescue",
    description: "Equipment for locating people and supporting rescue in demanding environments.",
    image: "/images/mountain-rescue.jpg",
    alt: "Helicopter crew preparing a mountain rescue hoist",
    categoryName: "Search & rescue equipment",
    categorySlug: "rescue-equipment",
  },
];
const sampleCategories: Category[] = areas.map((a) => ({
  slug: a.categorySlug,
  area: a.slug,
  name: a.categoryName,
  description:
    a.description +
    " This sample category shows how equipment will be organised in the ECI catalogue.",
  images: [{ src: a.image, alt: a.alt, caption: "Representative area image." }],
  sample: true,
}));
const names: Record<AreaSlug, string[]> = {
  air: ["Airborne platform", "Airborne observation system"],
  naval: ["Maritime platform", "Maritime monitoring system"],
  land: ["Ground platform", "Field equipment"],
  software: ["Radar monitoring application", "Activity monitoring application"],
  "search-and-rescue": ["Maritime rescue equipment", "Remote-area rescue equipment"],
};
const sampleProducts: Product[] = areas.flatMap((a) =>
  names[a.slug].map((name, i) => ({
    slug: `${a.slug}-${String(i + 1).padStart(2, "0")}`,
    area: a.slug,
    category: a.categorySlug,
    name,
    summary: `Sample ${a.name.toLowerCase()} catalogue entry.`,
    description: `A placeholder for ${name.toLowerCase()} information. Confirmed model details, available configurations and product images will be added here. Contact ECI to discuss equipment suitable for your requirements.`,
    images: [
      {
        src: a.slug === "search-and-rescue" && i === 0 ? "/images/sea-rescue.jpg" : a.image,
        alt:
          a.slug === "search-and-rescue" && i === 0
            ? "Maritime helicopter rescue demonstration"
            : a.alt,
        caption:
          "Representative image. This is a sample catalogue entry, not a confirmed product model.",
      },
    ],
    sample: true,
  })),
);
export const categories: Category[] = [...profileCategories, ...sampleCategories];
export const products: Product[] = [...profileProducts, ...sampleProducts];
export function productLabel(p: Product) {
  return p.sample
    ? "Sample product"
    : p.kind === "project"
      ? "Project reference"
      : p.kind === "solution"
        ? "Solution"
        : "Product";
}
export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
export function getCategory(area: string, slug: string) {
  return categories.find((c) => c.area === area && c.slug === slug);
}
export function getProduct(area: string, category: string, slug: string) {
  return products.find((p) => p.area === area && p.category === category && p.slug === slug);
}
export function productPath(p: Product) {
  return `/products/${p.area}/${p.category}/${p.slug}`;
}
