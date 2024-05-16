import React, { useState } from 'react';
import './html.css';
import Sidebar from './Sidebar';
import Htmlintro from './InnerCourse/Htmlintro';


// ----------------------------This is the Main Page-------------------------------

export default function Html() {
  const [content, setContent] = useState(null);

  // Function to handle the click event for Sidebar ul li and set the content state
  const handleClick = (Component) => {
    setContent(<Component />);
  };


  return (
    <>
      <div className='main-template'>
        <div className="sideBar scroll2">
          <Sidebar handleClick={handleClick}/>
        </div>
        <div className="template">
        {content === null ? <Htmlintro/> : null}
        {content}
        </div>
      </div>
    </>
  )
}
