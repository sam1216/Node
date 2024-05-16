import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../index/Login';
import SignUp from '../index/SignUp';
import Notes from '../Pages/Notes/Notes';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';




// eslint-disable-next-line 
export default function (props) {

  const navigate = useNavigate()
  const handelOnLogout = () =>{
    localStorage.removeItem("token");
    navigate("/")
  }
  const isLoggedIn = localStorage.getItem("token");

  
  return (
    <>
      <header className='navbar'>
        <div className="container main-header">
          <div className="logo">
            <h1><Link to="/"><span style={{fontSize:"30px"}}>&#10092;</span>&#47;CODE16<span style={{fontSize:"30px"}}>&#10093;</span></Link></h1>
          </div>
          <div className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/course">Course</Link></li>
              <li><Link to="/toutrial">Tutorial</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li className="btn"><Link to='/contact'>Contact</Link></li>
              {isLoggedIn && <span><Notes/></span>}
            </ul>
          </div>
          <div className='right-side-l-i'>
          {!localStorage.getItem("token")?<div className='headBtn'>
              <ul>
                <li className='headBtn-one'><Login login="Login" /></li>
                <li className='headBtn-two'><SignUp signup="Sign Up" /></li>
              </ul>
            </div>: <div className='headBtn user'>
              <ul>  
                <li className='headBtn-one'><Link className="userDash" to="/user">User</Link></li>
                <li className='headBtn-two userlogout' onClick={handelOnLogout}>Logout</li>
              </ul>
            </div> }
            <div className='change-body'>
            <FontAwesomeIcon onClick={props.toggleMode} icon={ props.mode === 'light' ?  faMoon : faSun} size="2x" color="#9333ea" />
            </div>
          </div>
        </div>
        <div className="course-menu">
          <ul>
            <li><Link to="/html">Html</Link></li>
            <li><Link to="/css">Css</Link></li>
            <li><Link to="/javascript">Javascript</Link></li>
            <li><Link to="/jquery">Jquery</Link></li>
            <li><Link to="/python">Python</Link></li>
            <li><Link to="/cms">CMS</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
}
