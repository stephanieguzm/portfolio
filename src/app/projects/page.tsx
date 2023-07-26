import { ProjectCard } from "../../components/projectCard/page"
import { PROFILE_PROJECTS_SUBTITLE } from "@lib/constants"
import { getAllProjects } from "@lib/projectdata"

const Projects = async () => {
  const projectsData = await getAllProjects()

  return (
    <section id={"projects"} className={"flex flex-col items-center justify-center text-gray-900 md:px-8 m-8"} >
      <h2 className={"text-4xl w-full max-w-2xl font-bold pb-4 text-left md:max-w-7xl"}>Projects</h2>
      <h3 className={"mt-1 text-md leading-6 text-gray-600 py-2 md:py-4 w-full max-w-2xl text-left md:max-w-7xl"}>{PROFILE_PROJECTS_SUBTITLE}</h3>
      <div className={"flex flex-col w-full max-w-2xl items-start justify-start md:max-w-7xl md:justify-between lg:flex-row"}>
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

export default Projects