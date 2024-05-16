import React, { useContext, useEffect } from 'react'
import userContext from '../../../../Context/ContextUser/userContext'
import { Link } from 'react-router-dom';
// import React from "react";


export default function AdminUser() {

  const context = useContext(userContext);
  const {getAllUser, allUser, deleteUser} = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllUser()  
    }   

  }, []);


  
  return (
    <div>
    <h2>User Information</h2>
    <table className='userTable usertblbtn'>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      
     
      {allUser.map((user) => {  
         return <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td><button><Link>Edit</Link></button></td>
          <td><button onClick={() => { deleteUser(user._id) }}><Link>Delete</Link></button></td>
         </tr>
     })}
       
      
    </table>
     
    </div>
  )
}
