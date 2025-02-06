import jwt from 'jsonwebtoken';

const verifyToken  =(token)=>{
  try {
    const isMatched=jwt.verify(token,process.env.JWT_KEY);
    
    
    return {success:1,isMatched};
  } catch (error) {
    return {success:0};
  }


}

export default verifyToken;

