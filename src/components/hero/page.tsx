"use client"

import { HERO_TITLE, HERO_SUBTITLE, HERO_SUBTITLE_LABELS } from "@/lib/constants"
import { useEffect, useState } from "react";

export const Hero = () => {

  let reducedMotion : MediaQueryList
  const [ reduced, setReduced ] = useState(false)

  useEffect(() => {
   reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
   setReduced(reducedMotion.matches)
  }, [])

  return (
    <section id={"hero"} className={"mx-auto flex h-[88vh] w-full items-center justify-center bg-fuchsia-400 px-4 text-center text-gray-900 md:px-8"}>
      <div>
        <h1>{HERO_TITLE}</h1>
        {!reduced && <h2>{HERO_SUBTITLE_LABELS}</h2>}
        {reduced && <h2>{HERO_SUBTITLE}</h2>}
      </div>
    </section>
  )
}