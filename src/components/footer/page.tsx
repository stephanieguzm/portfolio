import { COPYRIGHT , PROFILE_GITHUB, PROFILE_LINKEDIN} from "@lib/constants"
import Image from "next/image"

const DATE : Date = new Date()
const YEAR : number = DATE.getUTCFullYear()

const Footer = () => {
  return (
    <footer id={"footer"} className={"relative mx-auto flex h-[8vh] w-full items-center justify-center bg-purple-100 px-4 text-center text-gray-900 md:px-8 border-t border-gray-100"}>
      <div className={"flex w-full max-w-3xl flex-row items-center justify-between md:max-w-7xl md:space-y-0"}>
        <div>
          <p className={"mb-2 text-sm font-medium leading-6 text-gray-900"}>&#169; {YEAR} {COPYRIGHT}.</p>
        </div>
        <div className={"flex flex-row space-x-4 text-gray-900"}>
          <a href={PROFILE_GITHUB} target='_blank' rel='noreferrer'>
            <Image 
              src={"/images/site/github.svg"}
              alt={"GitHub icon"}
              width={24}
              height={24}
              className={"transition-transform duration-500 ease-in-out md:hover:-translate-y-1"}
            />
          </a>
          <a href={PROFILE_LINKEDIN} target='_blank' rel='noreferrer'>
              <Image 
              src={"/images/site/linkedin.svg"}
              alt={"LinkedIn icon"}
              width={24}
              height={24}
              className={"transition-transform duration-500 ease-in-out md:hover:-translate-y-1"}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer