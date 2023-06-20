import React from 'react'

interface Props extends React.HTMLProps<HTMLButtonElement> {
    children: any
}

const Button = ({children}: Props) => {
  return (
    <button className='px-4 py-2 text-lg outline-none bg-[#195AB4] text-white rounded'>{children}</button>
  )
}

export default Button