import React from 'react'
import './textarea.css'
const StyledTextArea = ({ text, setText, placeholder = '' }) => {
    return (
        <textarea className="minimal-textarea" placeholder={placeholder} value={text} onChange={e => setText(e.target.value)}></textarea>
    )
}

export default StyledTextArea