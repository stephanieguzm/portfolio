"use client"

import { FormEvent, useState, ChangeEvent } from "react"

const Form = () => {
  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value: typeof formData[keyof typeof formData] = event.target.value

    setFormData({...formData, [event.target.id]: value})
  }

  async function handleSubmit (event : FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      return <h4 className={"form-message"}>Failed to send. Please fill out all form inputs to send your message.</h4>
    }
    
    console.log((formData))

    try {
      await fetch("/api/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      clearForm()
      console.log("email sent successfully")

    } catch (error) {
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
    <form onSubmit={handleSubmit} className={""}>
      <div className={"form-inner"}>
        <label htmlFor={"name"} className={""}>
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
            className={""}>
            Submit
          </button>
      </div>
    </form>
  )
}

export default Form