import React from 'react';
import { Link } from 'react-router-dom';
import Csshome from './InnerCourse/Csshome';
import Cssintro from './InnerCourse/Cssintro';

const sidebarStyle = {
    overflowY: 'auto',
    maxHeight: '100vh',
};

export default function Sidebar({ handleClick }) {
    const handleLinkClick = (Component, event) => {
        event.preventDefault(); // Prevent the default navigation behavior
        handleClick(Component);
    };
    return (
        <div className='content' style={sidebarStyle}>
            <h3>Css Course</h3>
            <ul>
                <li>
                    <Link to="/css_home" onClick={(e) => handleLinkClick(Csshome, e)}>Css Home</Link>
                </li>
                <li>
                    <Link to="/css_intro" onClick={(e) => handleLinkClick(Cssintro, e)}>Css Intro</Link>
                </li>
            </ul>
        </div>
    )
}
