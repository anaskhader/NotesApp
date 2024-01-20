import React from 'react'
import Note from './components/Note.js'
import './App.css';
import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList.js';


const App = () => {

  const [notes, setNotes] = useState([
    {
      id: 1,
      text: 'Text of Note1',
      date: '29/04/1998',
      texto: 'yes',
    },
    {
      id: 2,
      text: 'Text of Note2',
      date: '2/04/1998',
      texto: 'yes',
    },
    {
      id: 3,
      text: 'Text of Note3',
      date: '20/04/1998',
      texto: 'yes',
    },
    {
      id: 4,
      text: 'Text of Note1',
      date: '29/04/1998',
      texto: 'yes',
    },
    {
      id: 5,
      text: 'Text of Note2',
      date: '2/04/1998',
      texto: 'yes',
    },
    {
      id: 6,
      text: 'Text of Note3',
      date: '20/04/1998',
      texto: 'yes',
    }
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      date: date.toLocaleDateString(),
      text: text
    };
    const newNotes = [...notes, newNote];

    setNotes(newNotes);

  }
  return (
    <div className='containter'>
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  )
}
export default App;
