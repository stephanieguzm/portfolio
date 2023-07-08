"use client"

import { SITE_NAME, HERO_SUBTITLE, HERO_SUBTITLE_LABELS } from "@/lib/constants"
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {

  const [ reduced, setReduced ] = useState(false)

  useEffect(() => {
   const reducedMotion : MediaQueryList = window.matchMedia("(prefers-reduced-motion: reduce)")
   setReduced(reducedMotion.matches)
  }, [])

  const labels : (string | number)[] = HERO_SUBTITLE_LABELS.map(label => [label, 1000]).flat()

  return (
    <section id={"hero"} className={"mx-auto flex h-[88vh] w-full items-center justify-center bg-fuchsia-200 px-4 text-center text-gray-900 md:px-8"}>
      <div>
        <h1 className={"text-4xl"}>Hi there, I&apos;m 
          <span className={"text-fuchsia-950"}> {SITE_NAME}</span>
        </h1>
        {reduced && <h2 className="text-3xl">{HERO_SUBTITLE}</h2>}
        {!reduced && <TypeAnimation
          preRenderFirstString={true}
          sequence={labels}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1.875em", lineHeight: "2.25em", display: "inline-block" }}
        />}
      </div>
    </section>
  )
}