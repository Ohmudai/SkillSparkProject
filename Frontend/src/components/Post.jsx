import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import '../../css/post.css'
import { useNavigate } from 'react-router';

export default function Post() {

  // const [formdata,setFormdata ]= useState({
  //   email:'',
  //   caption:'',
  //   file:''
  // });
  const [createdAt,setCreatedAt] = useState(null);
  const [formSubmitted,setformSubmitted]=useState(false);
  const [caption,setCaption] = useState('');
  const [filedata,setFiledata]=useState(null);
  const [comment,setComment] = useState('');
  
  const formdata = new FormData();
  const [isFormVisible,setIsFormVisible]=useState(false);
  const [previewsource,setPreviewSource]=useState('');
  const [post,setPost] = useState([]);

  const [showcomment,setShowcomment]=useState(false);

const Navigate = useNavigate();








  const openForm=()=>{
    setIsFormVisible(true);
  }  

  const closeForm = ()=>{
    setIsFormVisible(false);
  }
  
  
  const handleChange = (e)=>{
    // if(e.target.name=='file'){
    //   const  file = e.target.files[0];
    // console.log(file);
    // seeimage(file);
    // setFormdata({...formdata,file:file});
    // }
    // setFormdata({...formdata,email:localStorage.getItem('username'),[e.target.name]:e.target.value});
    if(e.target.name=='file'){
       const  file = e.target.files[0];
      setFiledata(file)
      seeimage(file);
      
    }
    
    else if(e.target.name=='caption'){
       setCaption(e.target.value);
        
    }
    
  }


  const handleSubmit = async (e)=>{
    e.preventDefault();
    formdata.append('file',filedata);
    formdata.append('email',localStorage.getItem('username'));
    formdata.append('caption',caption);
    const response = await axios.post("http://localhost:3000/upload/post", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    console.log(response.data.postDetail._id);
    setIsFormVisible(false);
    getPostResponse()
   
    
    

  }
  const seeimage=(file)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
      setPreviewSource(reader.result);
    }
  }

  const getPostResponse =async ()=>{
    const response = await axios.post("http://localhost:3000/post/show",{email:localStorage.getItem('username')},{
      headers:{
        'Content-type':'application/json'
      }
    });
    
    
    setPost(response.data.details);
    
    
    

  }
  const handleClick=async (postId)=>{
   const  deleteResponse = await axios.post("http://localhost:3000/post/delete",{id:postId},{
    headers:{
      'Content-type':'application/json'
    }
  });
  
  getPostResponse();
  }


  const handleLike=async(postId)=>{
    console.log(localStorage.getItem('username'));
      const response = await axios.post("http://localhost:3000/post/like",{id:postId,email:localStorage.getItem('username')},{
        headers:{
          'Content-type':'application/json'
        }
      });
      getPostResponse();
  }


  const handleComment =(e)=>{
    setComment(e.target.value);
  }

  const submitComment =  async (postId,comment)=>{
    const response = await axios.post("http://localhost:3000/post/comment",{id:postId,comment:comment},{
      headers:{
        'Content-type':'application/json'
      }
    });
    
    if(response.data.success==true){
      alert("Commented");
      const commentInput = document.querySelector('#comment');
      commentInput.value='';
    }
    else{
      alert("Unable to comment on this post");
    }
  }

  

  const showcmnt = async (postId)=>{
    Navigate(`/comments/${postId}`)
    
    
  }
    


    
  useEffect(()=>{
  getPostResponse();
  },[]);
 
  return (
    <>
          <div id='outlet'>
      <button onClick={openForm}> Create Post</button>

      {isFormVisible && (
        <div>
          <br />
            <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="caption">Caption</label>
                <input type="text" id='caption' name='caption' onChange={handleChange} /><br /> <br />

                <input type="file" name='file' onChange={handleChange}  />
                <button onClick={closeForm}>Cancel</button>
                <button type='submit' >Post</button>
                <img src={previewsource} alt="image cannot be previwed" style={{width:'300px', height:'300px', objectFit:'contain'}} />

            </form>

          
        </div>
      )}


        <div id='postSection' style={{margin:"20px"}}>
           {post.length==0?<div>NO POST AVAILABLE</div>:post.map((eachpost)=>{return <div id='postCard'>
            <p>Caption: {eachpost.caption}</p>
            
            <img src={eachpost.post.imageurl} style={{width:"300px",height:"300px"}}/>
            <button onClick={()=>{handleClick(eachpost._id)}} value={createdAt}>Delete post</button>

              <button onClick={()=>{handleLike(eachpost._id)}}>{eachpost.likes.noOfLikes}Like</button>
              <input type="text" onChange={handleComment} id='comment' placeholder='Comment Here!' />
              <button onClick={()=>{submitComment(eachpost._id,comment)}}>Submit Comment</button>
              <button onClick={()=>{showcmnt(eachpost._id)}}>Show Comments</button>

             
            </div>})}
        </div>



    </div>
    
    
    
    
    </>
  )
}

