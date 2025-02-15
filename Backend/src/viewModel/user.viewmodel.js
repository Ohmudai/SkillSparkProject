import User from '../models/user.model.js'




export const createUser=async (data)=>{
  try {
    
    const user  = await new User(data);

    return user.save();
  } catch (error) {
    console.error(`Error creating user error occured: ${error.message}`);
    
  }

}

export const uploadimgurl = async (email,profilePic)=>{
  try {
    console.log(profilePic);
    const user= await User.findOne({email});
    
    return await User.findByIdAndUpdate(user.id,{profilePic:profilePic},{new:true});
  } catch (error) {
    console.error(error.message);
  }
}

export const retriveImgUrl = async(email)=>{
  const user = await User.findOne({email});
  return user.profilePic.url;
 
}

