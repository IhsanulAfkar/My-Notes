import React, { useState } from 'react'
import './radio.css'
import { color } from '../../data/notes';
const StyledRadio = ({ selectedOption, setSelectedOption }) => {

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <>
            {color.map(c => (
                <label className="radio-container" key={c.id}>
                    <p style={{
                        color: c.color,
                        fontWeight: 'bold'
                    }}>
                        {c.name}
                    </p>
                    <input type="radio" value={c.color} checked={selectedOption === c.color} onChange={handleOptionChange} />
                    <span className="checkmark"></span>
                </label>
            ))}

        </>
    )
}

export default StyledRadio