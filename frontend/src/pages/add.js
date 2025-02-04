// Filename - pages/signup.js
import '../index.css';
import '../styles.css';
import '../table.css';
import React, { useState } from 'react';
let dbx = "";
let xResult ="";
const Add = () => {

  const [ setData] = useState(null);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [dob, setDob] = useState('');
  const [sex, setSex] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


 
  const handleSubmit = async (e) => {
    dbx ="oneliner";
    e.preventDefault();
    const record = {firstname, lastname, dob, sex, address, email, phone};
    console.log(record);
 
    try {
    
        const response = await  fetch("/api/insert", {
               method: 'POST',
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(record)
             });
        if (!response.ok) {
          console.log("Network response was not ok");
          throw new Error('Network response was not ok');
        }
        xResult = await response.json();
        setData(xResult);
      } catch (error) {
        console.log("Caught insert Post");
      } finally {
        console.log("finally insert Post");
      }
      console.log("CLICK 1: insert -Post");
      console.log(xResult);
      return(xResult);
  }


      return (

        <div className="blog-preview">
 
        <h1>ADD USER PAGE</h1>

        <form onSubmit={handleSubmit}>

        <div className="app-subtitle">
          <table class="container">
          <tr> <th>Item</th> <th>Value</th>             </tr>   
          <tr> <td>Firstname</td><td> <input type="text" required value={firstname} onChange={(e) => setFirstname(e.target.value)}/></td>   </tr>
          <tr> <td>Lastname</td> <td> <input type="text" required value={lastname}  onChange={(e) => setLastname(e.target.value)}/></td>   </tr>
          <tr> <td>DOB</td><td>       <input type="text" required value={dob} onChange={(e) => setDob(e.target.value)}/></td>   </tr>
          <tr> <td>Sex</td> <td>      <input type="text" required value={sex}  onChange={(e) => setSex(e.target.value)}/></td>   </tr>
          <tr> <td>Address</td><td>   <input type="text" required value={address} onChange={(e) => setAddress(e.target.value)}/></td>   </tr>
          <tr> <td>Email</td> <td>    <input type="text" required value={email}  onChange={(e) => setEmail(e.target.value)}/></td>   </tr>
          <tr> <td>Phone</td><td>     <input type="text" required value={phone} onChange={(e) => setPhone(e.target.value)}/></td>   </tr>
          </table>
        </div>
        <div className="create button">
        <p><button>Submit New User</button></p>
        </div>
        
      </form> 

      {
        
        dbx === "oneliner" ? 
        <div class="green-button">
        <font size="4" face="verdana" color="#008000">
        <b className="app-subtitle"> <p> {xResult.message} </p> </b>
        </font>
          </div>
          : <p></p> 
          }

        </div>
      
    );
};

export default Add;