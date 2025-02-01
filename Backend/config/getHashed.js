import bcrypt from 'bcrypt';

export const getHashed =async (req,res,next)=>{
  const hashedPassword = await bcrypt.hash(req.body.password,10);
  req.body.password=hashedPassword;
  next();

}

