import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  id: string
  name: string
  headline: string
  techStackLabels: string[]
  image: string
}

export const ProjectCard = ({ id, name, headline, techStackLabels, image } : ProjectCardProps) => {
  return (
    <div className={id}>
      <div>
        {/* <Image
          src={}
          alt={}
        ></Image> */}
        </div>
      <h2>{name}</h2>
      <h3>{headline}</h3>
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