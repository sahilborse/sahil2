
import './App.css';
// import Alert from './components/Alert';
// import CheckAbout from './components/CheckAbout';

import Navbar from './components/Navbar';
import Textadder from './components/Textadder';
import React, { useState } from 'react';


// import {
//   createBrowserRouter as Router,

//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";
function App() {
  // const [alert,setAlert]=useState(null)
  // const alertmsg=(message,type)=>{
  //   console.log("message",message)
  //   console.log("type",type)
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  // }
 



  const [applastMode,setapplastMode]=useState(" ")
  
  const[appmode,setappMode]=useState("light")
  const appToggleplay=()=>{
    if(appmode ==="light"){
      setappMode("dark")
      setapplastMode("light")
      document.body.style.backgroundColor="#052c65";
      // alertmsg("Dark mode activated","sucess")
    }
    else{
      setappMode("light")
      setapplastMode("")
      document.body.style.backgroundColor="#e9ecef";
     
  }}

  return (
  <>
{/*   
  <Router> */}
    <Navbar title='textutils' about='About' lastMode={applastMode} mode={appmode} togglePlay={appToggleplay}/>
   
      <Textadder heading="Enter the text " mode={appmode} />
     
     
      {/* <Routes>
          <Route path="/about" element={<CheckAbout />}/>
          
         
          <Route path="/users" element={<Users />}/>
           
          
          <Route path="/" element={<Home />}/>
            
          
        </Routes>
     
      </Router> */}
    
      

</> 
  ); 
  };

export default App;
