import React, { useState } from 'react'
import  {useNavigate} from 'react-router-dom'
import axios from 'axios';
export default function Register() {
  const [formData,setFormData] = useState({
    userName:'',
    email:'',
    password:''
  });
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
      }
    }
    else{
      alert("Password and confirm password must be same");
      console.log(formData.password);
      console.log(crfPassowrd);
    }

    Navigate('/login');


  } 

  const [crfPassowrd,setCrfPassword]=useState('');
  
  return (
    <>
      <div id='register_form'>
        <form action="#" onSubmit={handleSubmit}>
          <label  htmlFor="Username">Username</label><br />
          <input id='Username' type="text" name='userName' value={formData.userName} onChange={handlechange} /><br />
          <label htmlFor="email">E-mail</label><br />        
          <input id='email' name='email' type="text" value={formData.email} onChange={handlechange} /><br />
          <label htmlFor="password">Password</label><br />
          <input id='password' name='password' type="password" value={formData.passowrd} onChange={handlechange} /><br />
          <label htmlFor="password">Confirm Password</label><br />
          <input id='crfpassword' name='crfPassword' type="password" value={crfPassowrd} onChange={(e)=>{
            setCrfPassword(e.target.value);
          }} /><br />
          <input type="submit" />
        </form>
      </div>
      
    
    
    </>
  )
}
