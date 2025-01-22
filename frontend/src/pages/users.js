// Filename - pages/blogs.js
import '../index.css';
import '../styles.css';
import '../table.css'
import React, { useState, useEffect } from 'react';
let dbx = "";
let xResult ="";
const Users = () => {

 const [data, setData] = useState(null);
    const handleClick1 = async () => {
        dbx ="getusers";
       
        try {
        
          const response = await  fetch("/api/getusers");
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          xResult = await response.json();
          setData(xResult);
        } catch (error) {
          console.log("Caught Error in getUsers");
          dbx ="";
        } finally {
          console.log("finally getUsers");
        }
        console.log("CLICK 1: getUsers.");
        console.log(xResult);
        return(xResult);
      };

    return (
    <div className="blog-preview">
        <h1  >DISPLAY USERS</h1>
        <div className="app-subtitle">
            <button type="button" onClick={handleClick1} >Display All User</button>
        </div>

        {
    
       dbx == "getusers" ?


      xResult.map((userx) => (
        <table className="container">
        <tr> 
          <td width="150">{userx.firstname}</td>
          <td width="150">{userx.lastname}</td> 
          <td width="150">{userx.dob.substring(0,10)}</td>
          <td width="75">{userx.sex}</td> 
          <td width="350">{userx.address}</td>
          <td width="200">{userx.email}</td> 
          <td width="200">{userx.phone}</td>  
          </tr>                                                   
       </table> 
      ))
            
   
      : 
      <p></p> 
     }
    </div>
);
};

export default Users;

