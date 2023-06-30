import { PROFILE_ABOUT_TITLE, PROFILE_ABOUT_TEXT } from "@/lib/constants"

export const About = () => {
  return (
    <section id={"about"}>
      <h2>{PROFILE_ABOUT_TITLE}</h2>
      <p>{PROFILE_ABOUT_TEXT}</p>
    </section>
  )
}