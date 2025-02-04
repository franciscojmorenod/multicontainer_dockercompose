// Filename - pages/about.js

import '../index.css';
// import '../styles.css';
import React, { useState} from 'react';
let dbx = "";
let xResult ="";
const Database= () => {

  const [ setData] = useState(null);
    const handleClick1 = async (event) => {
        dbx ="oneliner";
        console.log("there was a click on database");
        try {
            let arg1 = event.target.getAttribute('data-arg1');
            if(arg1.includes("tables")) dbx ="tables";
            if(arg1.includes("databases")) dbx ="database";          
          const response = await  fetch(arg1);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          xResult = await response.json();
          setData(xResult);
        } catch (error) {
          console.log("Caught Error 1");
        } finally {
          console.log("finally 1");
        }
        console.log("CLICK 1: dbversion");
        console.log(xResult);
        return(xResult);
      };


    return (
        <div className="blog-preview">
            <h1 >DATABASE SETTINGS PAGE</h1>
            <br></br>
            <p></p>
            <p>Query the Database for info related to the current setup</p>
            {/* VERSION   : return the DB vesion */}
            {/* HEALTH    : return the current health status  */}
            {/* USER      : return the current DB user     */}
            {/* DATE      : return the current DB date      */}
            {/* DATABASES : return a list of Current DBs      */}
            {/* TABLES    : return a list of Current Tables in the DBs                           */}
            <br></br>
            <p></p>
            <div className="create button">
      <button type="button" onClick={handleClick1}  data-arg1="/api/dbversion">Version</button>
      <button type="button" onClick={handleClick1}  data-arg1="/api/healthz">Health </button>
      <button type="button" onClick={handleClick1}  data-arg1="/api/dbuser">User </button>
      <button type="button" onClick={handleClick1}  data-arg1="/api/dbdate">Date</button>
      <button type="button" onClick={handleClick1}  data-arg1="/api/getdatabases">Databases</button>
      <button type="button" onClick={handleClick1}  data-arg1="/api/gettables">Tables</button>
      </div>
      <br></br>
      <br></br>
      {
        
        dbx === "oneliner" ? 
        <div className="movie-card">
        <p> {xResult.message} </p>
          </div>
          : <p></p> 
          }


       {
    dbx === "tables" ?
    xResult.map((userx) => (
        <div className="create-button">
        <li  className="blue-button" key={userx.Tables_in_fjmdDB}>
         Table: {userx.Tables_in_fjmdDB}
        </li>
        </div>
      ))
      : 
      <p></p> 
  }
 {
    dbx === "database" ?
    xResult.map((userx) => (
      <div className="create-button">
        <li className="green-button"   key={userx.Database}>
         Database: {userx.Database}
        </li>
        </div>
      ))
      : 
      <p></p> 
  }

<br></br>   

        </div>
    );
};

export default Database;