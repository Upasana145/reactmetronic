import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./assets/plugins/global/plugins.bundle.css"   
import "./assets/css/style.bundle.css"   
// above css file i have included ,because of it i am able to see the css in the form
import "./assets/media/logos/logo-1.svg"
import Signup from "./Signupmetronic";



import Multipurpose from "./Multipurpose.jsx";
import Ecomercecontent from "./pages/Ecomercecontent.jsx";
import Projectcontent from "./pages/Projectcontent.jsx";
import Onlinecourse from "./pages/Onlinecourse.jsx";
import Marketingcontent from "./pages/Marketingcontent.jsx";
import Biddingcontent from "./pages/Biddingcontent.jsx";
import Logisticcontent from "./pages/Logisticcontent.jsx";
import  Storeanalytics from "./pages/Storeanalytics";


import Login from './Loginpage.jsx'
import Sigup from './Sigup.jsx'

import Deliverycontent from "./pages/Deliverycontent.jsx";
import Websiteanalytics from "./pages/Websiteanalytics.jsx";
import Dashboard from "./Dashboard.jsx";
import Signin from "./SignIn";
import School from "./pages/School";
import Financeperformance from "./pages/Financeperformance";
import SocialContent from "./pages/SocialContent";
import Podcast from "./pages/Podcast";
import Landingcontent from "./pages/Landingcontent";
import Crypto from "./pages/Crypto";
import PopupGfg from "./Logout";
import CollapseSections from "./Prac";

import Home from "./Home";
import ForgetPassword from "./ForgetPassword";




ReactDOM.render(
  <>

{/* <App/> */}

{/* <SidePanel/> */}
  {/* <Drop/> */}
   {/* <Signin/> */}


      {/* <BrowserRouter>
     <Routes>
      <Route path = '/' element={<Signin/> }></Route>
      {/* <Route path = '/' element={<Login/> }></Route> */}

       {/* <Route path = '/signup' element={<Sigup/> }></Route>  */}
      {/* <Route path = '/signup' element={<Signup/> }></Route> 

      {/* <Route path = '/home' element={< Home/> }></Route> */}
       {/* <Route path = '/dashboard' element={< Dashboard/> }></Route>
 

     </Routes>
     </BrowserRouter>   
  */} 


{/* main page  */}

      <BrowserRouter>
     <Routes>
     <Route path = '/' element={<Signin/> }></Route>
      <Route path = '/signup' element={<Signup/> }></Route> 
      {/* <Route path = '/dashboard' element={<Home/> }></Route> */}
      <Route path = '/forget-password' element={<ForgetPassword/> }></Route>
      <Route path = '/dashboard' element={<Dashboard/> }></Route>
      <Route path = '/multipurpose' element={<Multipurpose /> }></Route>
      <Route path = '/ecomercecontent' element={<Ecomercecontent/> }></Route>
      <Route path = '/projectcontent' element={<Projectcontent/> }></Route>
      <Route path = '/onlinecourse' element={<Onlinecourse/> }></Route>
      <Route path = '/marketingcontent' element={<Marketingcontent/> }></Route>
      <Route path = '/biddingcontent' element={<Biddingcontent/> }></Route>
      <Route path = '/logisticcontent' element={<Logisticcontent/> }></Route>
      <Route path = '/deliverycontent' element={<Deliverycontent/> }></Route>
      <Route path = '/websiteanalytics' element={<Websiteanalytics/> }></Route>
      <Route path = '/Storeanalytics' element={<Storeanalytics/> }></Route>
      <Route path = '/socialcontent' element={<SocialContent/> }></Route>
      <Route path = '/crypto' element={<Crypto/> }></Route>
      <Route path = '/school' element={<School/> }></Route>
      <Route path = '/podcast' element={<Podcast/> }></Route>
      <Route path = '/landing' element={<Landingcontent/> }></Route>
      <Route path = '/Home' element={<Home/> }></Route>

     


      

      

     </Routes>
     </BrowserRouter>    

     {/* {/* <Route path = '*' element={<Notfound/> }></Route> */}


     {/* <CollapseSections/> */}
{/* Signin page */}

     {/* <Signin/> */}

 {/* Signup page */}

{/* <Signup/> */}


  </>  
  
  ,document.getElementById("root")
)
