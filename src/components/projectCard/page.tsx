import Image from "next/image"
import Link from "next/link"
import { TechStackLabel } from "@/app/projects/[id]/page"

interface ProjectCardProps {
  id: string
  name: string
  number: number
  headline: string
  techStackLabels: TechStackLabel[]
  image: string
}

export const ProjectCard = ({ id, name, number, headline, techStackLabels, image } : ProjectCardProps) => {
  return (
    <div className={"justify-center"}>
      <div className={"w-3/4 flex flex-col"}>
        <h2 className={"text-2xl font-medium"}>{name}</h2>
        <div className={"w-full p-4"}>
          <Image
            src={image}
            alt={`${name} project homepage`}
            className={""}
            width={1000}
            height={1000}
            priority
          />
        </div>
        </div>
        <h3 className={"p-4"}>{headline}</h3>
        <h3>{number}</h3>
      <div className={"p-4 flex flex-row flex-wrap items-center justify-start"}>
        {techStackLabels.map(({skill}, index) => {
          return <p key={index} className={"bg-gray-900 text-white m-0 rounded text-sm px-5 py-2.5 text-center mx-2 mb-2 my-4"}>{skill}</p>
        })}
      </div>
      <Link 
        href={`/projects/${id}`}>
        View Project
      </Link>
    </div>
  )
}