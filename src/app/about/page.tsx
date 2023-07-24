import Image from "next/image"
import { PROFILE_ABOUT_TITLE, PROFILE_ABOUT_TEXT, ABOUT_IMG_ALT as altText, PROFILE_SKILLS_LABELS } from "@lib/constants"
import { Skills } from "@components/skills/page"

const About = () => {

  const labels = PROFILE_SKILLS_LABELS

  return (
    <section id={"about"} className={"flex flex-col items-start justify-center text-gray-900 md:px-8 m-8"}>
      <h1 className={"text-4xl font-bold pb-8"}>About Me</h1>
      <div className={"flex flex-col w-full max-w-2xl items-center justify-center space-y-4 md:max-w-7xl md:justify-between lg:flex-row"}>
        <Image 
          src={"/images/site/stephanie-headshot.png"}
          alt={`${altText}`}
          width={500}
          height={500}
          className={"rounded-full p-8"}
          priority
          />
        <div className={"flex flex-col items-start justify-start"}>
          <h2 className={"text-3xl font-semibold leading-7 text-gray-900 py-1" }>{PROFILE_ABOUT_TITLE}</h2>
          {PROFILE_ABOUT_TEXT.map((para, index) => {
            return <p key={index} className={"mt-1 text-md leading-6 text-gray-600 py-2"}>{para}</p>
          })}
        </div>
      </div>
      <Skills />
    </section>
  )
}

export default About