import React from 'react'
import "./Button.css"
const Button = ({children , variant , colorScheme , onClick}) => {
    
  return (
    <>
    <button 
    className={`btn ${ 
        colorScheme || "red"} 
        ${variant || "ghost"}`}
          onClick={onClick}>
            {children}
            </button>
            <hr />
          
            
            </>
  )
}

export default Button