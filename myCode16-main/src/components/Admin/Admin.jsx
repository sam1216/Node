import React, { useContext, useEffect } from 'react';
import userContext from '../../Context/ContextUser/userContext';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import "./admin.css";
import { RingLoader } from 'react-spinners'; 
import GroupIcon from '@mui/icons-material/Group';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function Admin() {

  const context = useContext(userContext);
  const { user, getUser, isLoading } = context;



  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser()
    }

    // eslint-disable-next-line
  }, []);

  console.log("Admin Layout", user)

  if (isLoading) {
    return <center className='ringLoader'><RingLoader color="#8f3ae4" size={70}/></center>
  }

  if (!user.isAdmin) {
    navigate("/");
  }


  return (
    <div className='container admin-Main'>
      <h1>Hey <span className='dash-heading '>{user.name}</span> Welcome to the Admin Dashboard</h1>
      <div className='adminContents'>
        <div className='adminLeft'>
          <div className="userBio dash-heading">
            <div className="adminImage">
              {user.image && (
                <img className="usreBioImg" src={`http://localhost:8000/${user.image}`} alt="User" />
              )}
            </div>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
          <ul className='adminNavLink'>
            <li><Link to="analytics"><BarChartIcon /> Analytics</Link></li>
            <li><Link to="user"><GroupIcon /> User</Link></li>
            <li><Link to="contact"><AddIcCallIcon /> Contacts</Link></li>
            <li><Link to="services"><MiscellaneousServicesIcon /> Services</Link></li>
          </ul>
        </div>
        <div className='adminRight'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
