import { PROFILE_SKILLS_TITLE, PROFILE_SKILLS_LABELS } from "@lib/constants"

export const Skills = () => {
  return (
    <div className={"flex-col w-full max-w-2xl items-center justify-center space-y-4 md:max-w-7xl md:justify-between md:space-y-0"}>
      <h2 className={"text-3xl font-semibold leading-7 text-gray-900 py-1"}>{PROFILE_SKILLS_TITLE}</h2>
      <div className={"z-10 flex flex-row flex-wrap justify-center md:justify-start"}>
        {PROFILE_SKILLS_LABELS.map((skill, index) => {
          return <p key={index} className={"text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mx-2 mb-2 my-4"}>{skill}</p>
        })}
      </div>
    </div>
  )
}