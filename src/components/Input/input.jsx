import React from 'react'
import './textInput.css'
const StyledInput = () => {
    return (
        <input type="input" className="minimal-input" placeholder="Search Note..." name="name" id='name' required />
    )
}

export default StyledInput