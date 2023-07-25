"use client"

import { SITE_NAME } from "@lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation" 
import { useState } from "react"

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
  const [ isNavOpen, setIsNavOpen ] = useState(false)
  
  const activeStyle = `text-purple-700 border-b-2 border-purple-700 my-8`
  const hideMenuNav = `hidden`
  const showMenuNav = `block absolute w-[100%] h-[100vh] top-0 left-0 bg-white z-10 flex flex-col justify-evenly items-center`

  return (
    <header id={"header"} className={"sticky top-0 z-50 mx-auto flex h-[8vh] w-full items-center justify-center bg-white px-4 text-center text-gray-900 border-b border-gray-100 md:px-8"}>
      <div className={"flex w-full max-w-3xl flex-row items-center justify-between md:max-w-7xl md:flex-row md:space-y-0"}>
        <div><Link href={`/`}className={"mb-2 font-medium leading-6 text-gray-900"}>{SITE_NAME}</Link></div>
        <nav>
          <section className={"mobile-menu flex lg:hidden"}>
            <div 
              className={"hamburger-icon align-center space-y-2"} 
              onClick={() => setIsNavOpen(prev => !prev)}>
              <span className="block h-0.5 w-8 bg-gray-600"></span>
              <span className="block h-0.5 w-8 bg-gray-600"></span>
            </div>
            <div className={isNavOpen ? showMenuNav : hideMenuNav}>
              <div
                className={"absolute top-0 right-0 px-8 py-8"}
                onClick={() => setIsNavOpen(false)}>
                <svg
                  className={"h-8 w-8 text-gray-600"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"2"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                {navLinks.map((link, index) => {
                  return (
                  <li key={index}>
                    <Link 
                      id={link.path}
                      href={`/${link.path}`}
                      onClick={() => setIsNavOpen(false)}
                      className={`border-b border-gray-400 my-8`}>
                      {link.name}
                    </Link>
                  </li>
                  )
                })}
              </ul>
            </div>
          </section>
          <ul className={"hidden space-x-8 lg:flex"}>
            {navLinks.map((link, index) => {
              const isActive = pathname.startsWith(`/${link.path}`)
              return (
                <li key={index}>
                  <Link 
                    id={link.path}
                    href={`/${link.path}`}
                    className={`px-3 py-2 text-gray-900 font-medium hover:text-purple-700 transition-transform duration-500 ease-in-out md:hover:-translate-y-1 ${isActive && activeStyle}`}
                    scroll={false}
                    passHref>
                      {link.name}
                  </Link>
                </li>)
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header