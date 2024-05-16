import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section className='container top-career'>
                <div className='career'>
                    <h2>Build your <span>Career</span> With <span>Us</span></h2>
                    <p>Everthing you need to build your Production Code</p>
                </div>
                <div className='career-main btn'>
                    <div className="career-one">
                            <h2>HTML</h2>
                            <ul>
                                <li>
                                    HTML is the standard markup language for Web pages.
                                </li>
                                <li>
                                    With HTML you can create your own Website.
                                </li>
                                <li>
                                    HTML is easy to learn - You will enjoy it!
                                </li>
                            </ul>
                            <button><Link to="html">Start Learning...</Link></button>
                    </div>
                    <div className="career-one">
                            <h2>CSS</h2>
                            <ul>
                                <li>
                                    HTML is the standard markup language for Web pages.
                                </li>
                                <li>
                                    With HTML you can create your own Website.
                                </li>
                                <li>
                                    HTML is easy to learn - You will enjoy it!
                                </li>
                            </ul>
                            <button><Link to="css">Start Learning...</Link></button>
                    </div>
                    <div className="career-one">
                            <h2>JAVASCRIPT</h2>
                            <ul>
                                <li>
                                    HTML is the standard markup language for Web pages.
                                </li>
                                <li>
                                    With HTML you can create your own Website.
                                </li>
                                <li>
                                    HTML is easy to learn - You will enjoy it!
                                </li>
                            </ul>
                            <button><Link to="javascript">Start Learning...</Link></button>
                    </div>
                </div>
            </section>
        </>

    )
}
