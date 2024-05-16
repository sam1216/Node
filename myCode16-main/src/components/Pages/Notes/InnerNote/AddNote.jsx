import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import noteContext from '../../../../Context/ContextNote/noteContext';

export default function AddNote() {
    const context = useContext(noteContext)
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "" })

    const handelOnClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description);
        setNote({title: "", description: ""})
    }  

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

   
    return (
        <div>
            <form action="">
                <input type="text" placeholder='Add Title'  id="title" name="title"   onChange={onChange} value={note.title} minLength={3} required />
                <input type="text" placeholder='Add Description'  id="description" name="description"  value={note.description} minLength={5} onChange={onChange} required />
                <Button className='drawerBtn' disabled={ note.title.length<5 || note.description.length<5 } type="submit" onClick={handelOnClick}>
                    <AddIcon className="addNoteItem" style={{ color: "var(--dark)" }} />
                </Button>
            </form>
           
        </div>
    )
}
