import { PROFILE_SKILLS_TITLE, PROFILE_SKILLS_LABELS } from "@lib/constants"

export const Skills = () => {
  return (
    <section id={"skills"}>
      <h2>{PROFILE_SKILLS_TITLE}</h2>
      {PROFILE_SKILLS_LABELS.map((skill, index) => {
        return <p key={index}>{skill}</p>
      })}
    </section>
  )
}