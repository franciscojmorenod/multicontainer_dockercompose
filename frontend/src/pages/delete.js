import '../index.css';
import '../styles.css';
import React, { useState } from 'react';
let dbx = "";
let xResult ="";

const Delete = () => {

  const [ setData] = useState(null);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  
  const handleSubmit = async (e) => {
    dbx ="oneliner";
    e.preventDefault();
    const record = {firstname, lastname};
    console.log(record);

    try {
    
        const response = await  fetch("/api/delete", {
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
        console.log("Caught delete Post Error");
      } finally {
        console.log("finally delete Post");
      }
      console.log("CLICK 1: delete -Post");
      console.log(xResult);
      return(xResult);
  }



    return (
        <div className="blog-preview">
            <h1>DELETE USER PAGE</h1>

            <form onSubmit={handleSubmit}>

            <div className="app-subtitle">
          <table class="container">
          <tr> <th>Item</th> <th>Value</th>             </tr>   
          <tr> <td>Firstname</td><td> <input type="text" required value={firstname} onChange={(e) => setFirstname(e.target.value)}/></td>   </tr>
          <tr> <td>Lastname</td> <td> <input type="text" required value={lastname}  onChange={(e) => setLastname(e.target.value)}/></td>   </tr>
          </table>
        </div>

     <br></br>
      <div className="create button">
        <p><button>Delete Existing User</button></p>
        </div>
        
      </form> 

            <p></p>


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

export default Delete;