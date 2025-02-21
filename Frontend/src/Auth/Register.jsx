import React, { useState } from 'react'
import  {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import {Helmet} from 'react-helmet'
import '../../css/Register.css'

export default function Register() {
  const [formData,setFormData] = useState({
    userName:'',
    email:'',
    password:''
  });
  const [crfPassowrd,setCrfPassword]=useState('');
  const Navigate =useNavigate()
  const handlechange = (e)=>{
      setFormData({...formData,[e.target.name]:e.target.value});
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(formData.password==crfPassowrd){

      const response = await axios.post('http://localhost:3000/register/create',formData);
      
      if(response.data.success==true){
        alert("User created successfully");
        console.log(response);
        Navigate('/login');
      }
    }
    else{
      alert("Password and confirm password must be same");
      Navigate('/');
      setFormData({
        userName:'',
        email:'',
        password:''
      });
      setCrfPassword('')
    }

    


  } 

 
  
  return (
    <>
    <Helmet><title>Register</title></Helmet>
      <div id='register_main_container'>
          <div id='form_container'>
            <form action="#" onSubmit={handleSubmit}>
              <label  htmlFor="Username">Username</label><br />
              <input id='Username' type="text" name='userName' value={formData.userName} onChange={handlechange} /><br />
              <label htmlFor="email">E-mail</label><br />        
              <input id='email' name='email' type="text" value={formData.email} onChange={handlechange} /><br />
              <label htmlFor="password">Password</label><br />
              <input id='password' name='password' type="password" value={formData.password} onChange={handlechange} /><br />
              <label htmlFor="password">Confirm Password</label><br />
              <input id='crfpassword' name='crfPassword' type="password" value={crfPassowrd} onChange={(e)=>{
                setCrfPassword(e.target.value);
              }} /><br />
              <input type="submit" />
              
            </form>
            <Link to='/login' id='link'>Login</Link>
          </div>

      </div>
      
    
    
    </>
  )
}
