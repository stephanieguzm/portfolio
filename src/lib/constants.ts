export const SITE_NAME : string = `Stephanie Guzm\u00E1n`
export const SITE_DESCRIPTION : string = `Portfolio Website`
export const COPYRIGHT : string = `Stephanie Guzm\u00E1n`

export const HERO_TITLE : string = `Hi there, I'm Stephanie Guzm\u00E1n`
export const HERO_SUBTITLE : string = `Front End Software Developer`
export const HERO_SUBTITLE_LABELS : string[] = [ "Front End Software Developer", "React Developer", "UI Developer"]

export const PROFILE_ABOUT_TITLE : string = `I’m Stephanie (she/her) and I build products with impact`
export const PROFILE_ABOUT_TEXT : string = `Curious and altruistic by nature, I spent a decade in social work helping people make meaningful changes in their lives. I collaborated with people, supported them through challenges, and equipped them with tools to solve their problems. I thrived in spaces that channelled my creativity, problem-solving, and systems thinking. \nI reached a point when I was ready to grow in a new career and solve problems with greater impact, and software development quickly became my outlet. Seeing my first web page come to life on my screen opened up a world of possibilities. I had discovered a new way to make an impact and I haven’t looked back. \nHelping people learn, grow, and connect with one another is at the heart of what I do. Fueled by my curiosity and eagerness to solve problems collaboratively, I'm eager to contribute my technical skills to an organization that's building digital products that positively impact the way people live!`

export const PROFILE_SKILLS_TITLE : string = `My Tech Stack`
export const PROFILE_SKILLS_LABELS : string[] = [
  "React",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Express",
  "Mocha",
  "Chai",
  "Cypress",
  "Rest APIs",
  "Git",
  "GitHub",
]

export const PROFILE_PROJECTS_TITLE : string = `Projects I’ve developed`
export const PROFILE_PROJECTS_SUBTITLE : string = `Harnessing technology to cultivate learning, growth, and connection`

export const PROFILE_CONNECT_TITLE : string = `Let's build something together`
export const PROFILE_CONNECT_SUBTITLE : string = `Reach out if you're looking for a developer, have a question, or want to connect.`

export const PROFILE_GITHUB : string = `https://github.com/stephanieguzm`
export const PROFILE_LINKEDIN : string = `https://www.linkedin.com/in/stephanie-guzman-sdsw/`

export interface Project {
    id: string
    name: string
    headline: string
    images: string[]
    techStackLabels: string[]
    repoURL: string[]
    liveURL: string
    purpose?: string
    techStackExp?: string
    problems?: string
    lessons?: string
}

export const PROJECTS_DATA : Project[] = [
  {
    id: "seekr",
    name: "Seekr",
    headline: "Job search web application where users search for, view, and apply to software engineering openings",
    images: ["https://bookmarked-fe.netlify.app/"],
    techStackLabels: ["React", "React Router", "CSS", "GraphQL", "Apollo Client"],
    repoURL: ["https://github.com/stephanieguzm/seekr-ui"],
    liveURL: "https://seekr-wine.vercel.app/",
    purpose: "",
    techStackExp: "",
    problems: "",
    lessons: "",
  },
  {
    id: "te-cuento",
    name: "Té Cuento",
    headline: "Virtual tea community web application where users learn about and share insights on a selection of tea",
    images: ["https://bookmarked-fe.netlify.app/"],
    techStackLabels: ["React", "React Router", "Cypress", "Node", "Express", "PostgreSQL", "Knex", "CSS"],
    repoURL: ["https://github.com/stephanieguzm/te-cuento-ui", "https://github.com/stephanieguzm/te-cuento-api"],
    liveURL: "https://te-cuento-ui.vercel.app/",
    purpose: "",
    techStackExp: "",
    problems: "",
    lessons: "",
  },
   {
    id: "bookmarked",
    name: "Bookmarked",
    headline: "Book-swapping web application where users add and lend out their personal library and browse books in circulation",
    images: ["https://bookmarked-fe.netlify.app/"],
    techStackLabels: ["React", "React Router", "GraphQL", "Apollo Client", "Cypress", "CircleCI", "CSS"],
    repoURL: ["https://github.com/The-Readers-Collective/bookmarked-ui"],
    liveURL: "https://bookmarked-fe.netlify.app/",
    purpose: "",
    techStackExp: "",
    problems: "",
    lessons: "",
  },
]