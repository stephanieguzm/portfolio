"use client"

import { SITE_NAME } from "@lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation" 
interface NavLink {
  path: string
  name: string
}

const navLinks : NavLink[] = [
  { path: "about", name: "About" },
  { path: "projects", name: "Projects" },
  { path: "connect", name: "Connect"}
]

const Header = () => {
  const pathname = usePathname()

  return (
    <header id={"header"} className={"sticky top-0 z-50 mx-auto flex h-[12vh] w-full items-center justify-center bg-white px-4 text-center text-gray-900 md:px-8"}>
      <div className={"flex w-full max-w-3xl flex-col items-center justify-center space-y-4 md:max-w-7xl md:flex-row md:justify-between md:space-y-0"}>
        <div><Link href={`/`}className={"mb-2 font-medium leading-6 text-gray-900"}>{SITE_NAME}</Link></div>
        <nav>
          <div className={"flex flex-row space-x-4"}>
            {navLinks.map((link, index) => {
              const isActive = pathname.startsWith(`/${link.path}`)
              const activeStyle = `text-purple-700 border-b-2 border-purple-700`

              return (<Link 
                key={index}
                id={link.path}
                href={`/${link.path}`}
                className={`px-3 py-2 text-gray-900 font-medium hover:text-purple-700 transition-transform duration-500 ease-in-out md:hover:-translate-y-1 ${isActive && activeStyle}`}
                scroll={false}
                passHref>
                  {link.name}
              </Link>)
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header