import React, { useContext, useState } from 'react'
import axios from 'axios';
import '../../css/Login.css'
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




export default function Login() {
const [formData,setFormData] = useState({
  email:"",
  password:""
});


const Navigate = useNavigate();
;



const handleChange = (e)=>{
  setFormData({...formData,[e.target.name]:e.target.value});
}
const handleSubmit = async (e)=>{
  e.preventDefault();
  const response = await axios.post("http://localhost:3000/user/login",formData);
  localStorage.setItem('username',formData.email);
  
  sessionStorage.setItem("token",response.data.token);
  if(!response.data.success){
    alert("wrong user credentials");
    Navigate('/login');
    
  }
  else{
    Navigate('/dashboard');
  }
  
  
  
}

  return (
    <>
    <Helmet><title>Login</title></Helmet>
      <div id='main_containerLogin'>

          <div id='form_container'>
          <form action="#" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label><br />
              <input type="text"name='email' placeholder ='Email' onChange={handleChange} /><br />
              <label htmlFor="password">Password</label>  <br />
              <input type="password" placeholder ='Password' name='password' onChange={handleChange} /><br />
              <input type="submit" />
          </form>
          <Link to='/'>Register</Link>
          </div>


      </div>
    
    
    
    
    </>
  )
}
