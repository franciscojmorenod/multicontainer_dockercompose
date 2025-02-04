// App.js (React component)
import './index.css';
import './styles.css';
import React, { useState } from 'react';
import{  BrowserRouter,  Routes,  Route,  Link} from "react-router-dom";
import Database from './pages/database';
import Index from './pages/index';
import Users from './pages/users';
import Add from './pages/add';
import Delete from './pages/delete';
import About from './pages/about'; //**** */


import Header from './components/Header';
import Footer from './components/Footer';


let dbx = "";
const App = () => {
  
  const [data] = useState(null);
 
  return (
    <div className="App">
     <Header> </Header>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/add">Add </Link>
          </li>
          <li>
            <Link to="/delete">Delete</Link>
          </li>
          <li>
            <Link to="/database">Database</Link>
          </li>          
          <li>
            <Link to="/about">About</Link>
          </li>                    
        </ul>
        </nav>

        <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/delete" element={<Delete/>}/>    
        <Route path="/database" element={<Database/>}/>         
        <Route path="/about" element={<About/>}/>     
        </Routes>
      </BrowserRouter>  

      <Footer></Footer>
      <br></br>
       <br></br>
         {

        dbx === "oneliner" ? 
        <div class="green-button">
        <font size="4" face="verdana" color="#008000">
        <b> <p> {data.message} </p> </b>
        </font>
          </div>
          : <p></p> 
          }
      {        console.log('We are inside app.js')}
    </div>
    
  );
};

export default App;