import { ProjectCard } from "../projectCard/page"
import { PROFILE_PROJECTS_TITLE, PROFILE_PROJECTS_SUBTITLE, PROJECTS_DATA } from "@/lib/constants"

export const Projects = () => {
  return (
    <section>
      <h2>{PROFILE_PROJECTS_TITLE}</h2>
      <h3>{PROFILE_PROJECTS_SUBTITLE}</h3>
      <div>
        {PROJECTS_DATA.map( (project, index) => {
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