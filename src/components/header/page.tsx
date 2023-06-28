"use client"

import { SITE_NAME } from "@/lib/constants"
import Link from "next/link"

interface NavLink {
  path: string
  name: string
}

const navLinks : NavLink[] = [
  { path: "about", name: "About" },
  { path: "skills", name: "Skills" },
  { path: "projects", name: "Projects" },
  { path: "connect", name: "Connect"}
]

const Header = () => {
  return (
    <header>
      <p>{SITE_NAME}</p>
      <div>
        {navLinks.map( (link, index) => 
          <Link key={index} className={`nav-link`} href={`#${link.path}`}>{link.name}</Link>
        )}
      </div>
    </header>
  )
}

export default Header