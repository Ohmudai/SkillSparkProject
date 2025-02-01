import jwt from 'jsonwebtoken';

const verifyToken  =(token)=>{
  try {
    const isMatched=jwt.verify(token,process.env.JWT_KEY);
    
    return 1;
  } catch (error) {
    return 0;
  }


}

export default verifyToken;

