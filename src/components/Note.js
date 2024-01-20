import { CiCircleRemove } from "react-icons/ci";
import "./note.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Note = ({ id, text, date, texto }) => {

    return (
        <div className='notes'>

            <div className='notes note'>
                <div className="div">{texto}     </div>

            </div>
            <p>{text}{date} </p>
        </div>
    )
}
export default Note;