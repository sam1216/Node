import React from 'react'
import file from '../photos/file.png'
import temp from '../photos/temp.png'
import comp from '../photos/comp.png'
import earth from '../photos/earth.png'

export default function HowStart() {
    return (
        <div className='container howStart'>
            <h2>How we can Learn</h2>
            <p>Basic's Learning concept you can here</p>
            <div className='howStart-main'>
                <div className="howStart-main-one down">
                    <div className="line"></div>
                    <img src={file} alt="" />
                    <p>1. Jion Code-16 - and Learn Programming</p>
                </div>

                <div className="howStart-main-one">
                    <img src={temp} alt="loading" />
                    <p>2. Choose a Template and Start from Scratch</p>
                    <div className="line one"></div>
                </div>

                <div id="hwSrt" className="howStart-main-one down">
                    <div className="line"></div>
                    <img src={comp} alt="loading" />
                    <p>3. Learn Code directely from CODE 16</p>
                </div>

                <div className="howStart-main-one">
                    <img src={earth} alt="loading" />
                    <p>4. Share your web page with the entire world..!!</p>
                </div>
            </div>
        </div>
    )
}
