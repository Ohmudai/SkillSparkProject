import cloudinary from 'cloudinary';


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || "dx0eekot8" ,
  api_key:process.env.CLOUDINARY_API_KEY || "818189653898766",
  api_secret:process.env.CLOUDINARY_API_SECRET || "FS4wJzeM8OQuomMNDZ2ykz53JI4",
});

export default cloudinary;
