import { PROFILE_ABOUT_TITLE, PROFILE_ABOUT_TEXT } from "@lib/constants"

export const About = () => {
  return (
    <section id={"about"} className={"m-4"}>
      <h2 className={"text-3xl font-semibold leading-7 text-gray-900 py-1"}>{PROFILE_ABOUT_TITLE}</h2>
      <p className={"mt-1 text-md leading-6 text-gray-600 py-4"}>{PROFILE_ABOUT_TEXT}</p>
    </section>
  )
}