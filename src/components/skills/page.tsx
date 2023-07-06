import { PROFILE_SKILLS_TITLE, PROFILE_SKILLS_LABELS } from "@lib/constants"

export const Skills = () => {
  return (
    <section id={"skills"} className={"m-4"}>
      <h2 className={"text-3xl font-semibold leading-7 text-gray-900 py-1"}>{PROFILE_SKILLS_TITLE}</h2>
      <div className={"z-10 flex flex-row flex-wrap justify-center md:justify-start"}>
        {PROFILE_SKILLS_LABELS.map((skill, index) => {
          return <p key={index} className={"text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mx-2 mb-2 my-4"}>{skill}</p>
        })}
      </div>
    </section>
  )
}