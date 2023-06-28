import { SITE_NAME , PROFILE_GITHUB, PROFILE_LINKEDIN} from "@/lib/constants"

const DATE = new Date()
const YEAR = DATE.getUTCFullYear()

const Footer = () => {
  return (
    <footer>
      <div>
        <p>&#169; {YEAR} {SITE_NAME}. All rights reserved.</p>
        <div>
          <a href={PROFILE_GITHUB} target='_blank' rel='noreferrer'>GitHub</a>
          <a href={PROFILE_LINKEDIN} target='_blank' rel='noreferrer'>LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer