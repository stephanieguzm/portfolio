"use client"

import { PROFILE_CONNECT_TITLE, PROFILE_CONNECT_SUBTITLE } from "@/lib/constants"
import Form from "../form/page"

export const Connect = () => {
  return (
    <section id={"connect"}>
      <h2>{PROFILE_CONNECT_TITLE}</h2>
      <h3>{PROFILE_CONNECT_SUBTITLE}</h3>
      <div>
        <Form />
      </div>
    </section>
  )
}