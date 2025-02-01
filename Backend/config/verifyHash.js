import bcrypt from 'bcrypt';

const verifyHash = async (hashedPassword,plainPassword)=>{
  const isMatch = await bcrypt.compare(plainPassword,hashedPassword);
  if(isMatch){
   
    return 1;
  }
  else{
    
    return 0;
  }
}

export default verifyHash;



