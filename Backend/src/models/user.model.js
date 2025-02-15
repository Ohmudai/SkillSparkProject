import mongoose from "mongoose";


const registerSchema = mongoose.Schema({
  userName:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },

  password:{
    type:String,
    required:true,
  },
  gender:{
    type:String,
    
    enum:["male","female"]
  },
  
    profilePic:{
      id:String,
      url:{type:String,default:'https://res.cloudinary.com/dx0eekot8/image/upload/v1739286472/default_profile_image_ku4buz.jpg'},
    },
});

 const  User = mongoose.model("User",registerSchema);

export default User;
