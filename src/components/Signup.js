import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';


function Signup(){
  const history=useHistory();

  const [user,setuser]=useState({
    name:"",email:"",phone:"" ,work:"",password:"",cpassword:""
  })

  function handleinput(event){
   const {name,value}=event.target;
   setuser({...user,[name]:value});
  }

  async function handleclick(event){
    event.preventDefault();
      const {name,email,phone,work,password,cpassword}=user;
      const res= await fetch("/Signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:name,email:email,phone:phone,work:work,password:password,cpassword:cpassword
        })
      })
      await res.json();
      
      if(res.status === 422 ){
        window.alert("Invalid Registration");
      }
      else {
        window.alert("Registration successfull");
        console.log("Registration successfull");
        history.push("/Login");
      }
  }

  return(
    <div>
        <div className="text-center form1" >
      <form className="form-signin" method="POST">
        <h1 className="h3 mb-3 font-weight-normal">Signup</h1>
        <input type="text" id="name" onChange={handleinput} name="name" value={user.name} className="form-control inputform" placeholder="Name" required/>
        <input type="email" id="inputEmail" onChange={handleinput} name="email" value={user.email} className="form-control inputform" placeholder="Email address" required autofocus />
        <input type="tel" id="phone" onChange={handleinput} name="phone" value={user.phone} className="form-control inputform" placeholder="Phone Number" required />
        <input type="text" id="work" onChange={handleinput} name="work" value={user.work} className="form-control inputform" placeholder="Work" required />
        <input type="password" id="password" onChange={handleinput} name="password" value={user.password} className="form-control inputform" placeholder="Password" required />
        <input type="password" id="cPassword" onChange={handleinput} name="cpassword" value={user.cpassword} className="form-control inputform" placeholder="Confirm Password" required />
        <br></br>
        <button className="btn btn-lg btn-secondary btn-block inputform" onClick={handleclick} type="submit">SignUp</button>
      </form>
    </div>
    </div>
  )
}

export default Signup;