import React from 'react'

const Button = ({text,style}) => {
  return (
    <div>
        <button className={`${style} rounded-bl-lg`}>{text}</button>
    </div>
  )
}

export default Button