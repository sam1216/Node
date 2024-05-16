import React from 'react'
import banner from '../photos/banner.jpg'
import banner2 from '../photos/banner2.jpg'
import banner3 from '../photos/banner3.jpg'
export default function Youtube() {
    return (
        <div className='container youtube'>
            <div className="youtube-left btn">
                <h1><span>Learn</span> With <span>CODE 16</span> Videos</h1>
                <b>You can also join our Youtube Channel</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro, animi cupiditate accusamus aspernatur placeat ut cum nulla, voluptas eum labore neque adipisci suscipit quaerat</p>
                <button><a href="#">Subscribe</a></button>
            </div>
            <div className="youtube-right">
                <div className='youtube-main handel0 btn'>
                    <div className="youtube-one">
                        <img src={banner} alt="" />
                    </div>
                    <div className='youtube-desc'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button><a href="#">Start Learning...</a></button>
                    </div>
                </div>
                <div className='youtube-main handel1 btn'>
                    <div className="youtube-one">
                        <img src={banner2} alt="" />    
                    </div>
                    <div className='youtube-desc'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button><a href="#">Start Learning...</a></button>
                    </div>
                </div>
                <div className='youtube-main handel2 btn'>
                    <div className="youtube-one">
                        <img src={banner3} alt="" />
                    </div>
                    <div className='youtube-desc'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button><a href="#">Start Learning...</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
