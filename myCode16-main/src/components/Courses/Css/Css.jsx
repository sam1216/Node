import React, { useState } from 'react'
import "./StyleCss.css"
import Sidebar from './Sidebar'
import Csshome from './InnerCourse/Csshome'

export default function Css() {
  const [content, setContent] = useState(null);

  // Function to handle the click event for Sidebar ul li and set the content state
  const handleClick = (Component) => {
    setContent(<Component />);
  };
  return (
    <div className='main-template'>
      <div className="sideBar scroll2">
        <Sidebar handleClick={handleClick} />
      </div>
      <div className="template">
        {content === null ? <Csshome /> : null}
        {content}
      </div>
    </div>
  )
}
