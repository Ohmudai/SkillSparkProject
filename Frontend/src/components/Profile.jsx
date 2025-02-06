import React, { useState } from 'react'
import '../../css/profile.css'
import axios from 'axios';
export default function Profile() {
  const [sourceimg,setSourceimg] = useState('');

  const handleChange = (e)=>{
    const file = e.target.files[0];
    previewSource(file);
  }

  const previewSource = (file)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
      setSourceimg(reader.result);
      console.log(sourceimg);
    }
  }

 const  handleSubmit  =(e)=>{
  e.preventDefault();
    uploadImage(sourceimg);
 }

 const uploadImage = async (sourceimg)=>{
  try {
    const response = await axios.post('http://localhost:3000/upload/image',{data:sourceimg},{headers:{'Content-type':'application/json'}});
    console.log(response);
  } 
  
  catch (error) {
    console.error(error.message);
  }
 }
  


  return (
    <div id='outlet'>
      <div id='content_div'>
        <div id='profile_pic'><img src="http://res.cloudinary.com/dx0eekot8/image/upload/v1738849647/feqtyicjrbqvfciv6hlz.png" /></div>
        <form action="#" onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <input type="submit" />
        </form>
        <div><h2>Welcome {localStorage.getItem("username")}!</h2></div>



      </div>

    </div>
  )
}
