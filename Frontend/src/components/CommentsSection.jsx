import React,{useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';


export default function CommentsSection() {
  const {id} = useParams();
  const [allComments,setAllComments] = useState([]);
  const getAllComments =async (id)=>{
    
      const response=await axios.post("http://localhost:3000/post/showcomment",{id:id},{
        headers:{
          'Content-type':'application/json'
        }
      });
      
      setAllComments(response.data.Comments);
  }
  getAllComments(id);
  return (
   
    <div>
        {allComments.length==0?<div>No Comments Available</div>:(allComments.map((eachComments)=>{

          return <div>{eachComments}</div>
        }))}

    </div>
  )
}
