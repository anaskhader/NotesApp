import React, { useState } from 'react'
import "./addnote.css"

const AddNote = ({ handleAddNote }) => {
    const [newnote, setNewnote] = useState('')

    const handlechange = (event) => { setNewnote(event.target.value) }

    const handleSaveClick = () => {
        if (newnote.trim().length > 0) {
            handleAddNote(newnote)
            setNewnote('');
        }
    }
    return (
        <div className='note new'>
            <textarea className='textarea' placeholder='Add text here!' value={newnote} onChange={handlechange}></textarea>
            <div className='note footer' >
                <p className='remaining'>200 letters remaining</p>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>

        </div>
    )
}

export default AddNote
