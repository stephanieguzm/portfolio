"use client"

const Form = () => {
  return(
    <form onSubmit={() => console.log("I'm in!")} className={""}>
      <div className={"form-inner"}>
        <label htmlFor={"name"} className={""}>
          Name
        </label>
        <input 
          id={"name"}
          type={"text"} 
          name={"name"} 
          className={""} />
        <div>
          <label htmlFor={"email"} className={""}>
            Email
          </label>
          <input 
            type={"email"} 
            name={"email"} 
            className={""} 
            placeholder={"Email"}/>
        </div>
        <div>
          <label htmlFor={"message"} className={""}>
            Message
          </label>
          <textarea 
            id={"message"}
            name={"message"}
            className={""}/>
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