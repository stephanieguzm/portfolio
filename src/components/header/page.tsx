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
    <header id={"header"} className={"mx-auto flex h-32 w-full items-center justify-center bg-white px-4 text-center text-gray-900 md:px-8"}>
      <div className={"flex w-full max-w-3xl flex-col items-center justify-center space-y-4 md:max-w-7xl md:flex-row md:justify-between md:space-y-0"}>
        <div><p className={"mb-2 font-medium leading-6 text-gray-900"}>{SITE_NAME}</p></div>
        <div className={"flex flex-row space-x-4"}>
          {navLinks.map((link, index) => 
            {
              const isActive = pathname.startsWith(link.id)
              return (<Link 
                key={index}
                id={link.id}
                href={`/${link.path}`}
                className={`px-3 py-2 text-gray-900 font-medium hover:text-purple-700`}>
                  {link.name}
              </Link>)
            }
          )}
        </div>
      </div>
    </header>
  )
}

export default Header