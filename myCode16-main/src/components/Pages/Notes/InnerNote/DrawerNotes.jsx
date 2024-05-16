import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import noteContext from "../../../../Context/ContextNote/noteContext"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function DrawerNotes(props) {

    const context = useContext(noteContext)
    const { deleteNote } = context;
    const { note } = props;

    const handleStart = (e, data) => {
        console.log('Drag started');
    };

    const handleDrag = (e, data) => {
        console.log('Dragging...');
    };

    const handleStop = (e, data) => {
        console.log('Drag stopped');
    };

    return (
        <>
            <div className="drawerNoteItem ">
                <div className="drawerCard ">
                    <Draggable
                        axis="both"
                        handle=".handle"
                        defaultPosition={{ x: 0, y: 0 }}
                        position={null}
                        scale={1}
                        onStart={handleStart}
                        onDrag={handleDrag}
                        onStop={handleStop}
                    >
                        <div className="row">
                            <div className='dragging handle'>
                                <div className='noteitem_one'>
                                    <b>{note.title.slice(0, 20)}</b>
                                    <p id="slice">{note.description.slice(0, 30)}</p>


                                </div>
                                <div className='noteitem_two'>
                                    <EditIcon className='noteitemEdit' style={{ color: "var(--primary)", cursor: "pointer" }}  />
                                    <DeleteIcon className='noteitemDlt' style={{ color: "var(--primary)", cursor: "pointer" }} onClick={() => { deleteNote(note._id) }} />
                                </div>
                            </div>
                        </div>
                    </Draggable>
                </div>
            </div>
        </>
    )
}
