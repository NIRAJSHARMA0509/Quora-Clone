import React from 'react'
import "./Button.css"

const Button=(props)=>{

    return(
        <div>
            <button {...props} className="questions"></button>
        </div>
    )
}

export default Button