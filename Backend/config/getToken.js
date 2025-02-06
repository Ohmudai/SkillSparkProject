import jwt from 'jsonwebtoken'

const getToken = (email)=>{
  const token = jwt.sign({email},process.env.JWT_KEY,{expiresIn:"1d"});
  
  return token;
}

export default getToken;


