import { COPYRIGHT , PROFILE_GITHUB, PROFILE_LINKEDIN} from "@lib/constants"

const DATE : Date = new Date()
const YEAR : number = DATE.getUTCFullYear()

const Footer = () => {
  return (
    <footer id={"footer"} >
      <div>
        <p>&#169; {YEAR} {COPYRIGHT}. All rights reserved.</p>
        <div>
          <a href={PROFILE_GITHUB} target='_blank' rel='noreferrer'>GitHub</a>
          <a href={PROFILE_LINKEDIN} target='_blank' rel='noreferrer'>LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer