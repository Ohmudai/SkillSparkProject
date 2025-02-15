import React, { useContext, useState } from 'react'
import axios from 'axios';
import { AuthContext } from './AuthContext.jsx';

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
      <div id='main_container'>

          <form action="#" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label><br />
              <input type="text"name='email' onChange={handleChange} /><br />
              <label htmlFor="password">Password</label>  <br />
              <input type="password" name='password' onChange={handleChange} /><br />
              <input type="submit" />
          </form>


      </div>
    
    
    
    
    </>
  )
}
