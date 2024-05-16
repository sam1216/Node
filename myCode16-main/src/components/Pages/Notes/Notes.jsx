import React from 'react'
import Drawer from '@mui/material/Drawer';
import './note.css'
import DrawerSIdeBar from './InnerNote/DrawerSIdeBar';


export default function Notes() {

  const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
      };

  return (
    <div className='container'>
      <li className="sideBtn" onClick={toggleDrawer(true)}>Notes</li>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {<DrawerSIdeBar/>}
      </Drawer>
    </div>
  )
}
