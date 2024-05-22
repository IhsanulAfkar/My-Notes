import React from 'react'

const NoteList = ({ data, handleDelete, selectedNote, setSelectedNote }) => {
    const handleClick = (note) => {
        if (selectedNote?.id === note.id) {
            setSelectedNote(null)
        } else {
            setSelectedNote(note)
        }
    }
    return (
        <>
            {data.map(note =>
                <div key={note.id} className={'note ' + (selectedNote?.id === note.id && 'selected_note')} style={{
                    backgroundColor: note.color
                }} onClick={() => handleClick(note)}>
                    <div className='close' onClick={() => handleDelete(note.id)}>&times;</div>
                    <div className='note_title y_padding'>
                        {note.title}
                    </div>
                    <div className='y_padding note_body'>
                        {note.body}
                    </div>
                    {/* <div>
                        <button>edit</button>
                    </div> */}
                </div>
            )}
        </>
    )
}

export default NoteList