import React from 'react';
import { Link } from 'react-router-dom';
import Htmlhome from './InnerCourse/Htmlhome';
import Htmlintro from './InnerCourse/Htmlintro';

const sidebarStyle = {
  overflowY: 'auto', // Set overflow-y to auto for vertical scrolling
  maxHeight: '100vh', // Set maximum height to ensure the sidebar doesn't exceed the viewport height
};


export default function Sidebar({ handleClick }) {
  const handleLinkClick = (Component, event) => {
    event.preventDefault(); // Prevent the default navigation behavior
    handleClick(Component);
  };

  return (
  
      <div className='content' style={sidebarStyle}>
        <h3>HTML Course</h3>
        <ul>
          <li>
            <Link to="/html_intro" onClick={(e) => handleLinkClick(Htmlintro, e)}>HTML Intro</Link>
          </li>
          <li>
            <Link to="/html_home" onClick={(e) => handleLinkClick(Htmlhome, e)}>HTML Home</Link>
          </li>
        </ul>
      </div>
  
  );
}

