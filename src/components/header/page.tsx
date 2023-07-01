"use client"

import { SITE_NAME } from "@lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation" 
interface NavLink {
  path: string
  id: string
  name: string
}

const navLinks : NavLink[] = [
  { path: "#about", id: "about", name: "About" },
  { path: "#skills", id: "skills", name: "Skills" },
  { path: "#projects", id: "projects", name: "Projects" },
  { path: "#connect", id: "connect", name: "Connect"}
]

const Header = () => {
const pathname = usePathname()

  return (
    <header id={"header"} >
      <p>{SITE_NAME}</p>
      <div>
        {navLinks.map((link, index) => 
          {
            const isActive = pathname.startsWith(link.id)
            return (<Link 
              key={index}
              id={link.id}
              href={`/${link.path}`}>
                {link.name}
            </Link>)
          }
        )}
      </div>
    </header>
  )
}

export default Header