import { PROFILE_SKILLS_TITLE, PROFILE_SKILLS_LABELS } from "@lib/constants"
import { Label } from "../label/page"

const labels = PROFILE_SKILLS_LABELS

export const Skills = () => {
  return (
    <div className={"flex-col w-full max-w-2xl items-center justify-center space-y-4 md:max-w-7xl md:justify-between md:space-y-0"}>
      <h2 className={"text-3xl font-semibold leading-7 text-gray-900 pt-8"}>{PROFILE_SKILLS_TITLE}</h2>
      <div className={"z-10 flex flex-row flex-wrap justify-center md:py-4"}>
        {labels.map((label, index) => {
          return (
            <div key={index} id={label.skill} className={"flex flex-col flex-wrap items-center justify-start"}>
              <Label 
                skill={label.skill}
                src={label.src}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}