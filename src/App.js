import logo from './logo.svg';
import './App.css';
import React, { Userstate, useState } from "react";
import  Buttom from "./components/Buttom";

function App() {

  function App() {
    const [email, setEmail] = useState("")
    const [fisrtname, setfirstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [Address, setAddress] = useState("")
  }

   function handleEmail (e) {
     setEmail.email.value
   }
   function Handlefirstname (e) {
     setfisrtname.firstname.value
   }
   function Handlelastname (e) {
     setlastname.lastname.value
   }
   function HandleAddress (e) {
     setAddress.Address.value
   }
   function handlesubmit (e) {
     e.preventdefault() 
     //sign in user
     setEmail
     setlastname
     setfisrtname
     setAddress
   }

Return (


  <div>
    <forms>
      <imput name ="email" type= 'email' value= {email} onchange= {(e) => HandleEmail(e)}/>
      <imput name ="firstname" type = "firstname" value = {firstname} onchange={(e) => Handlefirstname (e)}/>
      <imput name = "Lastname" type = "lastname" value = {lastname} onchange={(e) => Handlelastname (e)}/>
      <imput name ="Address" type ="Address" value = {Address} onchange= {(e) => HandleAddress (e)}/>
      <imput type ="submit"/>
    </forms>
  </div>
)
}


export default App;
S