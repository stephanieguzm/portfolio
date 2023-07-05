"use client"

import { FormEvent, useState, ChangeEvent } from "react"

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
    <form onSubmit={handleSubmit}>
      <div className={"form-inner"}>
        <label htmlFor={"name"}>
          Name
        </label>
        <input 
          id={"name"}
          type={"text"} 
          name={"name"} 
          className={""}
          value={formData.name}
          onChange={handleChange}
          minLength={2}
          maxLength={40}
          required />
        <div>
          <label htmlFor={"email"} className={""}>
            Email
          </label>
          <input 
            id={"email"}
            type={"email"} 
            name={"email"} 
            className={""}
            value={formData.email}
            onChange={handleChange}
            minLength={3}
            maxLength={30}
            required />
        </div>
        <div>
          <label htmlFor={"message"} className={""}>
            Message
          </label>
          <textarea 
            id={"message"}
            name={"message"}
            className={""}
            value={formData.message}
            onChange={handleChange}
            minLength={5}
            maxLength={750}
            required />
        </div>
        <button
          type={"submit"}
          className={"btn btn-primary btn-send-message"}
          disabled={status === formStatus.loading} >
          {status === formStatus.loading ? (
            <>
              <i className={"fa-solid fa-spinner fa-spin"}></i>Sending...
            </>
          ) : (
            <>Send Message</>
            )}
        </button>
        {status === formStatus.error && (
          <div className="alert alert-danger">
            There was an error sending your message. Please try again.
          </div>
        )}
        {status === formStatus.submitted && (
          <div className="alert alert-success contact_msg" role="alert">
            Your message was sent successfully.
          </div>
        )}
      </div>
    </form>
  )
}

export default Form