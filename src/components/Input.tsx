import { ComponentPropsWithoutRef } from 'react'

type Input = {
    id: string,
    label: string,
} & ComponentPropsWithoutRef<"input">

const Input = ({id, label, ...otherProps}: Input) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...otherProps} />
    </div>
    
  )
}

export default Input