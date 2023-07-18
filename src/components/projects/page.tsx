import { ProjectCard } from "../projectCard/page"
import { PROFILE_PROJECTS_TITLE, PROFILE_PROJECTS_SUBTITLE } from "@lib/constants"
import { getAllProjects } from "@lib/projectdata"

export const Projects = async () => {
  const projectsData = await getAllProjects()

  return (
    <section id={"projects"} className={"flex flex-col items-center justify-center text-gray-900 md:px-8 m-4 my-10"} >
      <h2 className={"text-3xl font-semibold leading-7 text-gray-900 py-1"}>{PROFILE_PROJECTS_TITLE}</h2>
      <h3 className={"mt-1 text-md leading-6 text-gray-600 py-4"}>{PROFILE_PROJECTS_SUBTITLE}</h3>
      <div className={"flex flex-row justify-center"}>
        {projectsData.map( (project, index) => {
          return <ProjectCard 
            id={project.id}
            name={project.name}
            headline={project.headline}
            techStackLabels={project.techStackLabels}
            image={project.images[0]}
            number={index + 1}
            key={index}
          />
        })}
      </div>
    </section>
  )
}