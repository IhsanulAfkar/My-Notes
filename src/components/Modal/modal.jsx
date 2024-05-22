import React, { useState } from 'react';
import './modal.css';
import StyledInput from '../Input/input';
import FormInput from './FormInput';
import StyledTextArea from '../Textarea/textarea';
import StyledRadio from '../RadioButton/radio';

const Modal = ({ show, handleClose, setNoteList, noteList, selectedNote = null }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [selectedOption, setSelectedOption] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        const newNote = {
            id: 'id' + Math.random().toString(36).substring(2, 9),
            title: title,
            body: content,
            color: selectedOption
        }
        setNoteList(prev => [...prev, newNote])
        handleClose()
    }
    return (
        <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
            <div className="modal-content y_padding" onClick={e => e.stopPropagation()}>
                <span className="close-button" onClick={handleClose}>&times;</span>
                <div className='title'>
                    {selectedNote ? 'Update Note' : 'Create Note'}
                </div>
                <div style={{
                    width: '100%',
                }}>
                    <FormInput text={title} setText={setTitle} placeholder='Note Title' />
                </div>
                <div>
                    <StyledTextArea text={content} setText={setContent} placeholder='Your Notes' />
                </div>
                <div>
                    <StyledRadio selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                </div>
                <button className='btn' onClick={handleSubmit}>Create Note</button>
            </div>
        </div>
    );
};

export default Modal;
