import { constants } from "buffer";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import mongoose from "mongoose";
export const createPost = async (email,data)=>{
 try {
  
  const user = await User.findOne({email:email});
  
  
  const postDetail = new Post({userId:user.id,...data});
  postDetail.save()
  
  return  await postDetail.populate('userId');

 } catch (error) {
  console.log(error.message);
  
}


}


export const retrivePost = async (email)=>{
  const user = await User.findOne({email});
  const postDetail = await Post.find({userId:user.id});
  return postDetail;
}

export const deletepost = async(id)=>{
  
   return Post.findByIdAndDelete(id)
}


export const Like = async (id,email)=>{
    const user = await User.findOne({email:email});
    const postDetail = await Post.findById(id);
    
    
    
  
    
   if(postDetail.likes.likedBy.includes(user.id)){
    return await Post.findByIdAndUpdate(id,{$inc:{"likes.noOfLikes":-1},$pull:{"likes.likedBy":user.id}},{new:true});
   }
   if(!postDetail.likes.likedBy.includes(user.id)){
    return await Post.findByIdAndUpdate(id,{$inc:{"likes.noOfLikes":1},$push:{"likes.likedBy":user.id}},{new:true});
   }
    
}

export const Comments = async (id,cmnt)=>{
  return await Post.findByIdAndUpdate(id,{$push:{comments:cmnt}},{new:true});
}

export const getComment = async (id)=>{
  return await Post.findById(id);
}

export const getAllPost = async () => {
  const postDetail = await Post.find();  // Fetch posts
  const populatedPostDetail = await Promise.all( 
      postDetail.map(async (eachpost) => await eachpost.populate("userId")) 
  );

   
  return populatedPostDetail;
};
