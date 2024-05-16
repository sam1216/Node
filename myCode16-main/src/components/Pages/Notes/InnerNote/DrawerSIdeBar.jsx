import React, { useContext, useEffect } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DrawerNotes from './DrawerNotes';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
import noteContext from "../../../../Context/ContextNote/noteContext"



export default function DrawerSIdeBar(props) {

    const navigate = useNavigate();
    const context = useContext(noteContext);
   

    const { notes, getNote, deleteAllNote } = context;


    useEffect(() => {
        if (localStorage.getItem("token")) {
            getNote()
        }
        else {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, []);

    const handleDeleteAllNotes = async () => {
        await deleteAllNote(); // Wait for notes to be deleted
        getNote(); // Fetch notes again after deletion
    };
    
    return (
        <div className='drawerSlide'>
            <Box className="drawerNote" sx={{ width: 400 }} role="presentation">
                <h2>Add Your Notes Here</h2>
                <List>
                    {['Add Note'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <div className='drawerMain'>
                                <div className="drawerBtn-main" >

                                    <AddNote />

                                </div>
                                <div className="drawerBtnDlt-main">
                                    <Button className='drawerBtnDlt'>
                                        <DeleteOutlineIcon className="noteitemDlt" sx={{ fontSize: 30 }} style={{ color: "var(--primary)" }} onClick={ handleDeleteAllNotes}/>
                                    </Button>
                                </div>
                            </div>
                        </ListItem>
                    ))}
                </List>
                <Divider style={{ borderColor: "var(--primary)" }} />

                <div className="drawerNoteList">
                    <h3 className='drawerNoteList_heading'>Your Notes will be Here</h3>
                        {notes.length === 0 && "No Notes to Display"}
                    <div className="drawerNoteItem">
                        {notes.map((note) => { return <DrawerNotes key={note._id} note={note} /> })}
                    </div>
                </div>
            </Box>
        </div>
    )
}


