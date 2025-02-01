import mongoose from "mongoose";

export const connectDb = async()=>{
  try{
    const connection  = await mongoose.connect(process.env.DB_URI,{
      dbName:"SocialMediaMern",
    });
    console.log("Database connected succesfully")
  }
  catch(error){
    console.error(`Error connecting to database error occured:${error.message}`);
  }
}
