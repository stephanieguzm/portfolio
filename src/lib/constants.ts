import { 
  SiReact as React, 
  SiHtml5 as HTML, 
  SiCss3 as CSS, 
  SiJavascript as JavaScript, 
  SiTypescript as TypeScript,  
  SiExpress as Express,
  SiMocha as Mocha,
  SiChai as Chai,
  SiCypress as Cypress,
  SiGit as Git,
  SiGithub as GitHub
} from "react-icons/si"

export const icons = {
  React, HTML, CSS, JavaScript, TypeScript, Express, Mocha, Chai, Cypress, Git, GitHub
}

export interface SkillsLabel {
  skill: string
  icon: keyof typeof icons
}

export const SITE_NAME : string = `Stephanie`
export const SITE_DESCRIPTION : string = `Portfolio Website`
export const COPYRIGHT : string = `Stephanie Guzm\u00E1n`

export const HERO_TITLE : string = `Hi there, I'm Stephanie Guzm\u00E1n`
export const HERO_SUBTITLE : string = `Front End Software Developer`
export const HERO_SUBTITLE_LABELS : string[] = [ "Web Developer", "React Developer", "UI Developer", "Front End Developer" ]

export const PROFILE_ABOUT_TITLE : string = `I build products with impact`
export const PROFILE_ABOUT_TEXT : string[] = [`Curious and altruistic by nature, I spent a decade in social work helping people make meaningful changes in their lives. I collaborated with people, troubleshot with them through challenges, and equipped them with the tools and perspective to solve their problems. I thrived in spaces that channelled my creativity, problem-solving, and systems thinking.`,
`I reached a point when I was ready to grow in a new career and solve problems with greater impact, and software development quickly became my outlet. Seeing my first web page come to life on my screen opened up a world of possibilities. I had discovered a new way to make an impact and I haven’t looked back.`,
`Helping people learn, grow, and connect with one another is at the heart of what I do. Fueled by my curiosity and eagerness to solve problems collaboratively, I'm eager to contribute my technical skills to an organization that's building digital products that positively impact the way people live.`]

export const PROFILE_SKILLS_TITLE : string = `My Tech Stack`
export const PROFILE_SKILLS_LABELS : SkillsLabel[] = [
  { 
    skill: "React",
    icon: "React"
  },
  {
    skill: "HTML",
    icon: "HTML"
  },
  {
    skill: "CSS",
    icon: "CSS"
  },
  {
    skill: "JavaScript",
    icon: "JavaScript"
  },
  {
    skill: "TypeScript",
    icon: "TypeScript"
  },
  {
    skill: "Express",
    icon: "Express"
  },
  {
    skill: "Mocha",
    icon: "Mocha"
  },
  {
    skill: "Chai",
    icon: "Chai"
  },
  {
    skill: "Cypress",
    icon: "Cypress"
  },
  {
    skill: "Git",
    icon: "Git"
  },
  {
    skill: "GitHub",
    icon: "GitHub"
  },
]

export const PROFILE_PROJECTS_TITLE : string = `Projects I’ve developed`
export const PROFILE_PROJECTS_SUBTITLE : string = `Cultivating learning, growth, and connection through technology`

export const PROFILE_CONNECT_TITLE : string = `Let's build something together`
export const PROFILE_CONNECT_SUBTITLE : string = `Reach out if you're looking for a developer, have a question, or want to connect.`

export const PROFILE_GITHUB : string = `https://github.com/stephanieguzm`
export const PROFILE_LINKEDIN : string = `https://www.linkedin.com/in/stephanie-guzman-sdsw/`
