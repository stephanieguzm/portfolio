"use client"
import { LuMailCheck, LuMailX } from 'react-icons/lu'

import { FormEvent, useState, ChangeEvent } from "react"
import { emailRegex } from "@/lib/utils"

const Form = () => {
  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
    message: ""
  })

  const formStatus = {
    incomplete: "incomplete",
    loading: "loading",
    submitted: "submitted",
    error: "error"
  }

  const [status, setStatus] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value: typeof formData[keyof typeof formData] = event.target.value

    setFormData({...formData, [event.target.id]: value})
  }

  async function handleSubmit (event : FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setStatus(formStatus.loading)
    
    const abortLongFetch = new AbortController()
    const abortTimeoutId = setTimeout( () => abortLongFetch.abort(), 7000)

    try {
      await fetch("/api/connect", {
        signal: abortLongFetch.signal,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      clearTimeout(abortTimeoutId)
      setStatus(formStatus.submitted);
      clearForm()
      console.log("email sent successfully")

    } catch (error) {
      setStatus(formStatus.error)
      console.log("failed to send email", error)
    }
  }

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: ""
    })
  }

  return(
    <form onSubmit={handleSubmit} className={"w-full max-w-lg"}>
      <div className={"flex flex-wrap -mx-3 mb-6"}>
        <div className={"w-full md:w-1/2 px-3 mb-6 md:mb-0"}>
          <label htmlFor={"name"} className={"block tracking-wide mb-2 text-sm font-medium leading-6 text-gray-900"}>
            Name
          </label>
          <input 
            id={"name"}
            type={"text"} 
            name={"name"} 
            className={"appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-md shadow-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ring-0.5 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-purple-400"}
            value={formData.name}
            onChange={handleChange}
            minLength={2}
            maxLength={40}
            required />
        </div>
        <div className={"w-full md:w-1/2 px-3"}>
          <label htmlFor={"email"} className={"block tracking-wide mb-2 text-sm font-medium leading-6 text-gray-900"}>
            Email
          </label>
          <input 
            id={"email"}
            type={"email"} 
            name={"email"} 
            className={"appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-md shadow-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ring-0.5 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-purple-400"}
            value={formData.email}
            onChange={handleChange}
            minLength={3}
            maxLength={30}
            pattern={emailRegex}
            required />
        </div>
      </div>
      <div>
        <label htmlFor={"message"} className={"block tracking-wide mb-2 text-sm font-medium leading-6 text-gray-900"}>
          Message
        </label>
        <textarea 
          id={"message"}
          name={"message"}
          className={"appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-md shadow-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ring-0.5 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-purple-400"}
          value={formData.message}
          onChange={handleChange}
          minLength={5}
          maxLength={750}
          required />
      </div>
      <button
        type={"submit"}
        className={"text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 my-4 disabled:opacity-50"}
        disabled={status === formStatus.loading} >
        {status === formStatus.loading ? (
          <>
            <i className={"text-grey"}></i>Sending...
          </>
        ) : (
          <>Send Message</>
          )}
      </button>
      {status === formStatus.error && (
        <div className={"flex flex-wrap mb-6 text-red-700 font-medium py-2.5 leading-6"}>
          <p className={"px-2 my-1 text-center"}><LuMailX /></p>
          <p>There was an error sending your message. Please try again.</p>
        </div>
      )}
      {status === formStatus.submitted && (
        <div className={"flex flex-wrap mb-6 text-purple-700 font-medium py-2.5 leading-6"}>
          <p className={"px-2 my-1 text-center"}><LuMailCheck /></p>
          <p>Your message was sent successfully.</p> 
        </div>
      )}
    </form>
  )
}

export default Form