import React, { useContext, useEffect } from 'react'
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import userContext from '../../Context/ContextUser/userContext';
import { useNavigate } from 'react-router-dom';
import noteContext from '../../Context/ContextNote/noteContext';



export default function UserDashboard() {


  const navigate = useNavigate();
  const context = useContext(userContext)
  const { user, getUser, deleteUser } = context;

  const context1 = useContext(noteContext)
  const { deleteAllNote } = context1;


  const handleDeleteAllNotes = async () => {
    await deleteAllNote(); // Wait for notes to be deleted
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser()
    }

    // eslint-disable-next-line
  }, []);

  const handelOnLogout = () => {
    localStorage.removeItem("token");
    navigate("/")
  }

  const handleDeleteUser = async () => {
    try {

      const confirmed = window.confirm("Are you sure you want to delete your Account ?");
      if (confirmed) {
        await deleteUser(user._id);
        handleDeleteAllNotes();
        handelOnLogout();
        navigate('/');
      }

    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container dashboard">
      <h1 className='dash-heading'>Welcome To Your Dashboard - {user.name}</h1>
      <div className='dash-border'>
        <div className="one">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Registration Date: {user.date}</p>
        </div>
        <div className="proImage">
          {user.image && (
            <img className="proImageUser" src={`http://localhost:8000/${user.image}`} alt="User" />
          )}
        </div>
        <div className="two" style={{ justifyContent: "center" }}>
          <EditCalendarIcon className='userDash-icon' />
          <DeleteIcon className='userDash-icon' onClick={handleDeleteUser} />
        </div>
      </div>
    </div>
  )
} 