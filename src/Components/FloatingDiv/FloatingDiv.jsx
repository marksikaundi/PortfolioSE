import React from 'react'
import "./FloatingDiv.css"

const FloatingDiv = ({image}) => {
  return (
        <div className="floatingdiv">
            <img src={image} alt="" />
            <span>
                Web 
                <br />
                Developer
            </span>
        </div>
    )
}

export default FloatingDiv