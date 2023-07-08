import { PROFILE_ABOUT_TITLE, PROFILE_ABOUT_TEXT } from "@lib/constants"

export const About = () => {
  return (
    <section id={"about"} className={"flex flex-col items-center justify-center text-gray-900 md:px-8 m-4 my-10"}>
      <div className={"flex-col w-full max-w-2xl items-center justify-center space-y-4 md:max-w-7xl md:justify-between md:space-y-0"}>
        <h2 className={"text-3xl font-semibold leading-7 text-gray-900 py-1" }>{PROFILE_ABOUT_TITLE}</h2>
        {PROFILE_ABOUT_TEXT.map((para, index) => {
          return <p key={index} className={"mt-1 text-md leading-6 text-gray-600 py-2"}>{para}</p>
        })}
      </div>
    </section>
  )
}