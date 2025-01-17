// Filename - pages/about.js
import '../index.css';
import '../styles.css';
import React, { useState, useEffect } from 'react';
let dbx = "";
let xResult ="";
const Database= () => {

  const [data, setData] = useState(null);
    const handleClick1 = async (event) => {
        dbx ="oneliner";
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
        <div>
            <h1 className="app-subtitle">
                Database Settings Page
            </h1>

            <div className="app-subtitle">
      <button type="button" onClick={handleClick1}  data-arg1="/api/dbversion">Version</button>
      <button type="button" onClick={handleClick1}  data-arg1="/api/healthz">Health </button>
      <button type="button" onClick={handleClick1}  data-arg1="/api/dbuser">User </button>
      <button type="button" onClick={handleClick1}  data-arg1="/api/dbdate">Date</button>
      <button type="button" onClick={handleClick1}  data-arg1="/api/getdatabases">Databases</button>
      <button type="button" onClick={handleClick1}  data-arg1="/api/gettables">Tables</button>
      </div>

      {
        
        dbx == "oneliner" ? 
        <div class="green-button">
        <font size="4" face="verdana" color="#008000">
        <b className="app-subtitle"> <p> {xResult.message} </p> </b>
        </font>
          </div>
          : <p></p> 
          }


       {
    dbx == "tables" ?
    xResult.map((userx) => (
        <div class="green-button">
        <li  key={userx.Tables_in_fjmdDB}>
         Table: {userx.Tables_in_fjmdDB}
        </li>
        </div>
      ))
      : 
      <p></p> 
  }
 {
    dbx == "database" ?
    xResult.map((userx) => (
        <div class="green-button">
        <li  key={userx.Database}>
         Database: {userx.Database}
        </li>
        </div>
      ))
      : 
      <p></p> 
  }

      

        </div>
    );
};

export default Database;