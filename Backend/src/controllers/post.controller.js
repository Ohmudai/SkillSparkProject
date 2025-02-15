import { Comments, createPost, deletepost, getAllPost, getComment, Like, retrivePost } from "../viewModel/post.viewmodel.js";


export const post = async (req,res)=>{
  // console.log(req.body.email);
  try {
    const postdetail =await createPost(req.body.email,{post:req.body.post,caption:req.body.caption},);
    
    res.status(200).json({
      success:true,
      postDetail:postdetail,
    });
  } catch (error) {
    res.status|(400).json({
      success:false,
      message:error.message,
    });
  }
}

export const getPost = async(req,res)=>{
  try {
    const postDetail = await retrivePost(req.body.email);
    if(postDetail.length!=0){
      res.status(200).json({
        success:true,
        details:postDetail
      });

    }
    else{
      res.status(200).json({
        success:true,
        details:[]
      });
    }
  } catch (error) {
    console.error(error.message);
  }
}


export const postdelete = async (req,res)=>{
  try {
    const deleteInfo = deletepost(req.body.id);
    if(deleteInfo){
      res.status(200).json({
        success:true,
        message:"Post Deleted"
      })
      
    }
    
  } catch (error) {
    
    res.status(400).json({
      success:false,
      message:"Unable to delete post"
    })
  }
}

export const  HandleLikes = async (req,res)=>{
    try {
      
      const postDetail = await  Like(req.body.id,req.body.email);
    res.status(200).json({
      success:true,
      postDetail:postDetail
    });
    } catch (error) {
      res.status(400).json({
        success:false,
        message:"Uable to like the post",
        Error:error.message
      })
    }
    
}

export const HandleComments = async (req,res)=>{
  try {
    const commentDetail = await Comments(req.body.id,req.body.comment);
  res.status(200).json({
    success:true,
    comments:commentDetail
  });
  } catch (error) {
    res.status(400).json({
      success:false,
      message:"cannot comment",
      ErrorOccured:error.message
    });
  }
}

export const showCmnt = async (req,res)=>{
  try {
   
    const allComments = await getComment(req.body.id);
    if(allComments.comments.lenght==0){
      res.status(200).json({
        success:true,
        Comments:[]
      })
    }
    else{
      res.status(200).json({
        success:true,
        Comments:allComments.comments
      })
    }


}
  catch (error) {
    res.status(400).json({
      success:false,
      Message:"Cannot get comments"
    });
  }
}

export const allPost =async (req,res)=>{
  try {
    const allpost = await getAllPost();
    res.status(200).json({
      success:true,
      postDetails:allpost
    });
  } catch (error) {
    res.status(400).json({
      success:false,
      Message:"Cannot get post",
      ErrorOccured:error.message,
    })
  }
  
}





