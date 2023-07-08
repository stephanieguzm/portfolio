import Image from "next/image"
import { getAllProjects, getSingleProject } from "@lib/projectdata"
import { notFound } from "next/navigation";
export interface ProjectPageProps {
  id: string
}
export interface repoUrl {
  text: string
  link: string
}
export interface ProjectInterface {
  id: string
  name: string
  headline: string
  images: string[]
  techStackLabels: string[]
  repoURL: repoUrl[]
  liveURL: string
  purpose?: string
  techStackExp?: string
  problems?: string
  lessons?: string
}

export const generateStaticParams = async () => {
  const projects : ProjectInterface[] = await getAllProjects()

  return projects.map(project => {
    return { id : project.id }
  })
}

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const result = await getSingleProject({ params })
  const project = result

  if (!project) {
    notFound()
  }

  return (
    <section id={project.id} className={"h-[76vh] bg-white"}>
      <h2>{project.name}</h2>
      <h3>{project.headline}</h3>
      <div>
        {project.repoURL.map((url, index) => {
          return  <a key={index} href={url.link} target='_blank' rel='noreferrer'>{url.text}</a>
        })}
        <a href={project.liveURL} target='_blank' rel='noreferrer'>Live Site</a>
      </div>
      <Image 
        src={project.images[0]}
        alt={`${project.name} homepage`}
        width={500}
        height={500}
        priority
      />
    </section>
  )
}

export const dynamicParams = true

export default ProjectPage