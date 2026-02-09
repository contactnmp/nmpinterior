import { client } from "@/lib/sanity"
import { notFound } from "next/navigation"
import ProjectComponent from "./ProjectComponent"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  
  const project = await client.fetch(`
    *[_type == "project" && slug.current == $slug][0]{ title, description }
  `, { slug });

  if (!project) return { title: 'Project Not Found' }

  return {
    title: `${project.title} | NMP Studio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params

  const data = await client.fetch(`
    *[_type == "projects" && slug.current == $slug][0] {
      title,
      description,
      images 
    }
  `, { slug }, { cache: 'no-store' });

  if (!data) {
    notFound()
  }

  return (
    <main>
        <ProjectComponent data={data} />
    </main>
  )
}