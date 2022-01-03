import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
   const [FirstName , setFirstName] = useState("");
   const [LastName , setLastName] = useState("");
   const [UserName , setUserName] = useState("");
   const [Phone , setPhone] = useState("");
   const [Email, setEmail] = useState("");
   const [Dob , setDob] = useState("");
   const [pass , setpass] = useState("");
   const [con , setcon] = useState("");
   const [countr , setcountr] = useState("");
   let mani = ["Country","India","Japan","Mexico","America","Australia"]
   
  return (
    <div className="main">
    <div className="container">
      <div className="heading">
        <h1  id="hea">Register</h1>
      </div>
      <div className="d1">
        <input  onChange={(inputProperties)=>{setFirstName(inputProperties.target.value)}} id="m1" type="text" placeholder="FirstName"/>
          {FirstName.length == 0 ? <p id="ra1">please Enter your lastname</p> : isNaN(FirstName) ? "": <p id="ra1">don't use numeric number</p> }
        
         <input onChange={(inputProperties)=>{setLastName(inputProperties.target.value)}} id="m2" type="text" placeholder="LastName"/>
        {LastName.length ==  0 ? <p id="ra2">please Enter your lastname</p> : isNaN(LastName) ? "": <p id="ra2">don't use numeric number</p> }
      </div>

      <div className="d2"><input onChange={(inputProperties)=>{setUserName(inputProperties.target.value)}} id="m3"  type="text" placeholder="UserName"/>
      {UserName.length ==  0 ? <p id="ra3">please Enter your username</p> : isNaN(UserName) ? "": <p id="ra3">don't use numeric number</p> }
        <input  onChange={(inputProperties)=>{setPhone(inputProperties.target.value)}} id="m4"  type="number" placeholder="PhoneNo"/>
        {Phone.length == 0 ? <p id="ra4">please Enter your Phonenumber</p> :Phone.length == 10 ? "": <p id="ra4">please type only 10 digits number</p> }
      </div>
      <div className="d3"><input id="m5"  type="email" placeholder="E-mail" onChange={(e)=>{setEmail(e.target.value)}}/>
      {Email.length == 0 ? <p id="ra5">enter your email</p> :Email.includes("@") && Email.includes(".") ? "" :<p id="ra5">please enter correct email address</p>}
     </div>
      <div className="d6"> <select id="m6"  >
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Prefer Not To Say</option>
        </select>

        <input  onChange={(inputProperties)=>{setDob(inputProperties.target.value)}}  id="m7"  type="date" placeholder="Date Of Birth"/>
        {Dob.length == 0 ? <p id="ra6">please enter your date of birth</p> : ""}
      </div>
      <div className="d4"> 
      <select id="m8" onChange={(m)=>{setcountr(mani[m.target.options.selectedIndex])}}> 
          <option>Country</option>
          <option>India</option>
          <option>Japan</option>
          <option>Mexico</option>
          <option>America</option>
          <option>Australia</option>
</select>
        {countr == "Country" ? <p id="raa">select your country</p>:""}
        {console.log(countr)}
        <select id="m9" >
          <option>State</option>
        </select><span id="ra0"></span>
      </div>
      <div className="d5"> <input id="m0" onChange={(inputProperties)=>{setpass(inputProperties.target.value)}} type="password" placeholder="PassWord"/>
          {pass.length ==  0 ? <p id="ra7">please Enter your Password</p> :""}
        <input id="m01"  onChange={(inputProperties)=>{setcon(inputProperties.target.value)}} type="password" placeholder="Confirm Password"/>
        {con.length ==  0 ? <p id="ra8">please Enter your Password</p> :""} 
      </div>
      <div className="btn"><button id="butt" onclick="maniKandan()"
          >Register</button></div>
    </div>
  </div>

  );
}

export default App;
