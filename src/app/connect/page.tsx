"use client"

import { PROFILE_CONNECT_TITLE, PROFILE_CONNECT_SUBTITLE } from "@lib/constants"
import Form from "@components/form/page"

const Connect = () => {
  return (
    <section id={"connect"} className={"md:px-8 m-4"}>
      <h2 className={"text-3xl font-semibold leading-7 text-gray-900 py-1"}>{PROFILE_CONNECT_TITLE}</h2>
      <p className={"mt-1 text-md leading-6 text-gray-600 py-4"}>{PROFILE_CONNECT_SUBTITLE}</p>
      <div>
        <Form />
      </div>
    </section>
  )
}

export default Connect