import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  id: string
  name: string
  number: number
  headline: string
  techStackLabels: string[]
  image: string
}

export const ProjectCard = ({ id, name, number, headline, techStackLabels, image } : ProjectCardProps) => {
  return (
    <div className={id}>
      <div className={"w-3/4 flex flex-col justify-center"}>
        <h2 className={"text-2xl font-medium"}>{name}</h2>
        <div className={"w-full"}>
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
        <h3>{headline}</h3>
        <h3>{number}</h3>
      <div>
        {techStackLabels.map((tech, index) => {
          return <p key={index}>{tech}</p>
        })}
      </div>
      <Link 
        href={`/projects/${id}`}>
        View Project
      </Link>
    </div>
  )
}