import Image from "next/image"

type LabelProps = {
  skill: string
  src: string
}

export const Label = ( { skill, src } : LabelProps) => {
  return (
    <>
      <p className={"text-gray-900 font-medium rounded-full text-sm px-5 py-2.5 text-center mx-2 mb-2 my-4"}>{skill}</p>
      <Image 
        src={src}
        alt={`${skill} icon`}
        width={48}
        height={48}
        className={"pb-2.5"}
      />
    </>
  )
}