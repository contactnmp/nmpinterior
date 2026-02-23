import { client } from "@/lib/sanity"
import ProjectsComponent from "./ProjectComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Portfolio | Residential & Hospitality Projects",
  description: "Explore our portfolio of refined residential homes and boutique hospitality projects. NMP Interior Design showcases bespoke interiors across London and the UK.",
  keywords: [
    "Interior Design Portfolio",
    "Luxury Home Renovation",
    "Hospitality Design Projects",
    "London Interior Designer Gallery",
    "Residential Interiors London",
    "NMP Studio Projects"
  ],
  openGraph: {
    title: "Interior Design Portfolio | NMP Studio",
    description: "Refined residential and boutique hospitality projects by NMP Interior Design.",
    url: "https://nmpinterior.co.uk/projects",
    siteName: "NMP Interior Design",
    locale: "en_GB",
    type: "website",
  },
}

export default async function ProjectsPage() {
  const projects = await client.fetch(`
    *[_type == "projects"] | order(_createdAt asc) {
      _id,
      title,
      slug,
      "mainImage": images[0]
    }
  `, {}, { cache: 'no-store' });

  return (
    <main>
       <ProjectsComponent projects={projects} />
    </main>
  )
}