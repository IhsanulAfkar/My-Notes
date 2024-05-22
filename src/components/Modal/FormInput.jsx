import React from 'react'
import './input.css'
const FormInput = ({ text, setText, placeholder = '' }) => {
    return (
        <input type="input" className="form-input" placeholder={placeholder} value={text} onChange={e => setText(e.target.value)} required />
    )
}

export default FormInput