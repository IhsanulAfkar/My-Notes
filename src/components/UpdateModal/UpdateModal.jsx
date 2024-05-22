import React, { useState } from 'react';
import '../Modal/modal.css';
import FormInput from '../Modal/FormInput';
import StyledTextArea from '../Textarea/textarea';
import StyledRadio from '../RadioButton/radio';

const UpdateModal = ({ show, handleClose, setNoteList, noteList, selectedNote }) => {
    const [title, setTitle] = useState(selectedNote.title)
    const [content, setContent] = useState(selectedNote.body)
    const [selectedOption, setSelectedOption] = useState(selectedNote.color)
    const handleSubmit = (e) => {
        e.preventDefault()
        const newArr = noteList.map(note => {
            if (note.id === selectedNote.id) {
                return {
                    id: note.id,
                    title: title,
                    body: content,
                    color: selectedOption
                }
            }
            return note
        })
        setNoteList(newArr)
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
                <button className='btn' onClick={handleSubmit}>Update Note</button>
            </div>
        </div>
    );
};

export default UpdateModal;
