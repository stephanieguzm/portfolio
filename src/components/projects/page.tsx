import { ProjectCard } from "../projectCard/page"
import { PROFILE_PROJECTS_TITLE, PROFILE_PROJECTS_SUBTITLE } from "@lib/constants"
import { getAllProjects } from "@lib/projectdata"

export const Projects = async () => {
  const projectsData = await getAllProjects()

  return (
    <section id={"projects"} >
      <h2>{PROFILE_PROJECTS_TITLE}</h2>
      <h3>{PROFILE_PROJECTS_SUBTITLE}</h3>
      <div>
        {projectsData.map( (project, index) => {
          return <ProjectCard 
            id={project.id}
            name={project.name}
            headline={project.headline}
            techStackLabels={project.techStackLabels}
            image={project.images[0]}
            key={index}
          />
        })}
      </div>
    </section>
  )
}