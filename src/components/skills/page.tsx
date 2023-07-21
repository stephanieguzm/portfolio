import { PROFILE_SKILLS_TITLE, PROFILE_SKILLS_LABELS } from "@lib/constants"
import Image from "next/image"

const labels = PROFILE_SKILLS_LABELS

export const Skills = () => {
  return (
    <div className={"flex-col w-full max-w-2xl items-center justify-center space-y-4 md:max-w-7xl md:justify-between md:space-y-0"}>
      <h2 className={"text-3xl font-semibold leading-7 text-gray-900 pt-8"}>{PROFILE_SKILLS_TITLE}</h2>
      <div className={"z-10 flex flex-row flex-wrap justify-center md:justify-start"}>
        {labels.map((label, index) => {
          return (
            <div key={index} id={label.skill} className={"flex flex-col flex-wrap items-center justify-start"}>
              <p className={"text-gray-900 font-medium rounded-full text-sm px-5 py-2.5 text-center mx-2 mb-2 my-4"}>{label.skill}</p>
              <Image 
              src={label.src}
              alt={`${label.skill} icon`}
              width={48}
              height={48}
              className={"hover:scale-125 transition duration-500"}
            />
            </div>
          )
        })}
      </div>
    </div>
  )
}