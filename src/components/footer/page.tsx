import { LuGithub, LuLinkedin } from "react-icons/lu"
import { COPYRIGHT , PROFILE_GITHUB, PROFILE_LINKEDIN} from "@lib/constants"

const DATE : Date = new Date()
const YEAR : number = DATE.getUTCFullYear()

const Footer = () => {
  return (
    <footer id={"footer"} className={"mx-auto flex h-36 w-full items-center justify-center bg-purple-100 px-4 text-center text-gray-900 md:px-8"}>
      <div className={"flex w-full max-w-3xl flex-col items-center justify-center space-y-4 md:max-w-7xl md:flex-row md:justify-between  md:space-y-0"}>
        <div>
          <p className={"mb-2 text-sm font-medium leading-6 text-gray-900"}>&#169; {YEAR} {COPYRIGHT}. All rights reserved.</p>
        </div>
        <div className={"flex flex-row space-x-4"}>
          <a href={PROFILE_GITHUB} target='_blank' rel='noreferrer'>
            <LuGithub
              size={25}
              className={"transition-transform cursor-pointer hover:-translate-y-1"}
            />
          </a>
          <a href={PROFILE_LINKEDIN} target='_blank' rel='noreferrer'>
            <LuLinkedin 
              size={25}
              className={"transition-transform cursor-pointer hover:-translate-y-1"}
              />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer