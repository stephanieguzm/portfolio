import Image from "next/image"
import { getAllProjects, getSingleProject } from "@lib/projectdata"
export interface ProjectPageProps {
  id: string
}
export interface ProjectInterface {
  id: string
  name: string
  headline: string
  images: string[]
  techStackLabels: string[]
  repoURL: string[]
  liveURL: string
  purpose?: string
  techStackExp?: string
  problems?: string
  lessons?: string
}

export const dynamicParams = false

export const generateStaticParams = async () => {
  const projects : ProjectInterface[] = await getAllProjects()

  return projects.map(project => {
    return { id : project.id }
  })
}

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const result = await getSingleProject({ params })
  const project = result

  return (
    <section id={project.id}>
      <h2>{project.name}</h2>
      <h3>{project.headline}</h3>
      <div>
        {project.repoURL.length == 1 ? <a href={project.repoURL[0]} target='_blank' rel='noreferrer'>View Code</a> :
          <>
            <a href={project.repoURL[0]} target='_blank' rel='noreferrer'>UI Code</a>
            <a href={project.repoURL[1]} target='_blank' rel='noreferrer'>API Code</a>
          </>
        }
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

export default ProjectPage