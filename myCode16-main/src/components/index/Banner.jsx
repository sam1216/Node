// import typewriter from '../js/body'
import robo from '../videos/robo2.gif';
import Home from './Home';
import HomeBook from './HomeBook';
import Youtube from './Youtube';
import EasySearch from './EasySearch';
import HowStart from './HowStart';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

export default function Banner() {



  return (
    <>
      <div className='container main-banner btn'>
        <div className='banner-content'>
          <h1>Welcome to <span>CODE 16</span></h1>
          <p>Learn <span  style={{ color: 'var(--primary)', fontWeight: 'bold' }}><Typewriter
             words={['HTML', 'Css', 'JavaScript', 'Python !']}
            loop={5}
            cursor
            cursorStyle='_'
          /></span></p>
          <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro, animi cupiditate accusamus aspernatur placeat ut cum nulla, voluptas eum labore neque adipisci suscipit quaerat numquam alias nesciunt consequuntur iusto?</p>
          <button><Link  to="/get">Get Started</Link ></button>
          <button><Link  to="/intro">Intro</Link ></button>
        </div>
        <div className='robo'>
          <img src={robo} alt="loading" />
        </div>
      </div>
      
     <Home/>
     <HomeBook/>
     <Youtube/>
     <EasySearch/>
     <HowStart/>
    </>
  )
}
