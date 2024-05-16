import './App.css';
import { useState } from 'react';
import './components/css/Header-Footer.css'
import Header from "./components/header/Header";
import './components/css/style.css'
import Banner from './components/index/Banner';
import './components/css/global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from './components/Pages/Course/Course';
import Toutrial from './components/Pages/Toutrial/Toutrial';
import Blog from './components/Pages/Blog/Blog';
import Contact from './components/Pages/Contact/Contact';
import Html from './components/Courses/Html/Html';
import Css from './components/Courses/Css/Css';
import Jquery from './components/Courses/Jquery/Jquery';
import Python from './components/Courses/Python/Python';
import Cms from './components/Courses/Cms/Cms';
import UserDashboard from './components/index/UserDashboard';
import Footer from './components/header/Footer';
import Htmlhome from './components/Courses/Html/InnerCourse/Htmlhome';
import Notes from './components/Pages/Notes/Notes';
import UserState from './Context/ContextUser/UserState';
import NoteState from './Context/ContextNote/NoteState';
import Admin from './components/Admin/Admin';
import AdminUser from './components/Pages/Layouts/AdminUser/Admin-User';
import AdminContacts from './components/Pages/Layouts/AdminContacts/AdminContact';
import AdminServices from './components/Pages/Layouts/AdminServices/AdminServices';
import AdminAnalytics from './components/Pages/Layouts/AdmnAnalytics/AdminAnalytics';




function App() {
  const [mode, setMode] = useState('light'); //Wheather dark Mode is enable or not.
  // eslint-disable-next-line
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.querySelector("body").setAttribute("data-theme", "dark")
      document.body.style.color = "white";
    } else {
      setMode('light')
      document.querySelector("body").setAttribute("data-theme", "light")
      document.body.style.color = "black";

    }
  }

  return (
    <>

      <UserState>
        <NoteState>
          <BrowserRouter>
            <Header mode={mode} toggleMode={toggleMode} />
            <Routes>
              <Route exact path="/" element={<Banner />}/>
              <Route exact path="/course" element={<Course />}/>
              <Route exact path="/toutrial" element={<Toutrial />}/>
              <Route exact path="/blog" element={<Blog />}/>
              <Route exact path="/contact" element={<Contact />}/>
              <Route exact path="/notes" element={<Notes />}/>
              <Route exact path="/user" element={<UserDashboard />}/>

              <Route exact path="/html" element={<Html />}/>
              <Route exact path="/html_home" element={<Htmlhome />}/>
              <Route exact path="/css" element={<Css />}/>
              <Route exact path="/jquery" element={<Jquery />}/>
              <Route exact path="/jquery" element={<Jquery />}/>
              <Route exact path="/python" element={<Python />}/>
              <Route exact path="/cms" element={<Cms />}/>

              <Route exact path="/admin" element={<Admin/>}>
                <Route exact path='user' element={<AdminUser/>}/>
                <Route exact path='contact' element={<AdminContacts />}/>
                <Route exact path='services' element={<AdminServices />}/>
                <Route exact path='analytics' element={<AdminAnalytics />}/>
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </NoteState>
      </UserState>
    </>
  );
}

export default App;
