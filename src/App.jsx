import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StyledInput from './components/Input/input'
import NoteList from './components/NoteList'
import { listNotes } from './data/notes'
import Modal from './components/Modal/modal'
import FormInput from './components/Modal/FormInput'
import UpdateModal from './components/UpdateModal/UpdateModal'


function App() {
  const [noteList, setnoteList] = useState(listNotes)
  const [createModal, setCreateModal] = useState(false)
  const [updateModal, setupdateModal] = useState(false)
  const [searchText, setsearchText] = useState('')
  const [searchedNote, setsearchedNote] = useState([])
  const [selectedNote, setselectedNote] = useState(null)
  const deleteNote = (noteId) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      const newArr = noteList.filter(note => note.id !== noteId)
      setnoteList(newArr)
    }
  }
  const filterNote = (text) => {
    const lower = text.toLowerCase()
    return noteList.filter(note => {
      return note.body.toLowerCase().includes(lower) || note.title.toLowerCase().includes(lower)
    })
  }
  useEffect(() => {
    if (searchText !== '') {
      const newNoteList = filterNote(searchText)
      setsearchedNote(newNoteList)
    }
  }, [searchText])
  useEffect(() => {
    console.log(noteList)
  }, [noteList])

  return (
    <>
      {selectedNote &&
        <UpdateModal handleClose={() => setupdateModal(false)} noteList={noteList} selectedNote={selectedNote} setNoteList={setnoteList} show={updateModal} />
      }
      <Modal handleClose={() => setCreateModal(false)} show={createModal} setNoteList={setnoteList} noteList={noteList} />
      <div className='container'>
        <div className='header'>
          <p>My Notes</p>
        </div>
        <div className='button_wrapper'>
          <button className='btn' onClick={() => setCreateModal(true)}>Create Note</button>
          <button className='btn' disabled={!selectedNote} onClick={() => setupdateModal(true)}>Update Note</button>
        </div>
        <div className='input_wrapper'>
          <FormInput text={searchText} setText={setsearchText} placeholder='Search note...' />
        </div>
        <div className='note_container'>
          <NoteList data={searchText ? searchedNote : noteList} handleDelete={deleteNote} selectedNote={selectedNote} setSelectedNote={setselectedNote} />
        </div>
      </div>
    </>
  )
}

export default App
