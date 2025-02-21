import React, { useState } from 'react'
import '../../css/profile.css'
import axios from 'axios';
import {Helmet} from 'react-helmet'

export default function Profile() {
  const [sourceimg,setSourceimg] = useState('');
  const[imagesrc,setImagesrc]=useState('');
  const handleChange = (e)=>{
    const file = e.target.files[0];
    previewSource(file);
  }

  const previewSource = (file)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
      setSourceimg(reader.result);
      
    }
  }

 const  handleSubmit  =async (e)=>{
  e.preventDefault();
    uploadImage(sourceimg);
    
 }

 const uploadImage = async (sourceimg)=>{
  try {
    
    const response = await axios.post('http://localhost:3000/upload/image',{data:sourceimg},{headers:{'Content-type':'application/json'}});

    const imageUploadpayload={
      email:localStorage.getItem('username'),
      profilePic:{
        id:localStorage.getItem('username'),
        url:response.data.Response.url

      }
    }
    
    const imgUploadResponse= await axios.patch("http://localhost:3000/imgurl/upload",imageUploadpayload,{headers:{'Content-type':'application/json'}});
  
    const  email = localStorage.getItem('username'); 

    setSourceimg('');

   
   const imgurl = await axios.post("http://localhost:3000/retrive/imageurl",{email:email});
    setImagesrc(imgurl.data.Imageurl); 
    
    
  } 
  
  catch (error) {
    console.error(error.message);
  }
 }

 async function showdp (){
  const  email = localStorage.getItem('username'); 
  const imgurl = await axios.post("http://localhost:3000/retrive/imageurl",{email:email});
    setImagesrc(imgurl.data.Imageurl); 
    
 }

 showdp();


  


  return (
    <div id='outlet'>
      <Helmet><title>profile</title></Helmet>
      <div id='content_div'>
        <div id='profile_pic'><img src={sourceimg || imagesrc} /></div>
        <form action="#" onSubmit={handleSubmit}>
          <label id='labelForDp' htmlFor="photoChoose">Edit profile pic</label>
        <input type="file" id="photoChoose" onChange={handleChange} style={{display:"none"}} />
        <input type="submit" />
        </form>
        
        <div id='showusernamecontainer' ><h2 id='showusername'>Welcome {localStorage.getItem("username")}!</h2></div>



      </div>

    </div>
  )
}
