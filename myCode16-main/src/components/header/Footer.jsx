import React from 'react'
import giphy from '../videos/giphy.gif'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
    return (
       <div className='footer-main'>    
        <div id="darkFooter" className='container footer-main'>
            <div className='divide-footer'>
                <div className="footer-sec">
                    <img src={giphy} alt="" />
                </div>
                <div className="footer-sec">
                    <h3>Toutrials</h3>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JAVASCRIPT</a></li>
                        <li><a href="#">PYTHON</a></li>
                        <li><a href="#">REACT</a></li>
                    </ul>
                </div>
                <div className="footer-sec">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Users</a></li>
                        <li><a href="#">Members</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Certification</a></li>
                    </ul>
                </div>
                <div className="footer-sec social">
                    <h3>Social Media's</h3>
                    <div className='social-icons'>
                        <FacebookRoundedIcon className="myicon" fontSize='large' />
                        <GitHubIcon className="myicon" fontSize='large' />
                        <YouTubeIcon className="myicon" fontSize='large' />
                        <InstagramIcon className="myicon" fontSize='large' />
                        <XIcon className="myicon" fontSize='large' />
                    </div>
                    <p>You can follow CODE 16 in Social Media</p>
                    <p>Email : code16@gmail.com</p>
                </div>
            </div>
            <hr />
            <div className="cpywrite">
                <p>All Rights reversed by <span>@code16</span></p>
            </div>
        </div>
      </div>

    )
}
