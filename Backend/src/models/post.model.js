import { timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";


const postSchema = mongoose.Schema({

  userId:{
    type:mongoose.Types.ObjectId,
    required:true,
    ref:'User'

  },

  caption:{
    type:String,
    
  },

  post:{
    imageurl:{
      type:String,
      required:true
    },
    
  },
  likes:{noOfLikes:{type:Number,default:0},likedBy:[{type:String}]}

  

  ,

  comments:[{
      type:String,
      
    }
  ]







},{timestamps:true});



const Post = mongoose.model('Post', postSchema);
export default Post;




