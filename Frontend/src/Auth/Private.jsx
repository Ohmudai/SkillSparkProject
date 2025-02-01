import React, { useContext } from 'react'
import { AuthContext } from './AuthContext.jsx'
import { useNavigate } from 'react-router-dom';

export default function Private({children}) {
  const Navigate= useNavigate();

  const {token}= useContext(AuthContext); 
  if(token){
    return children;
  }
  else {
    return <div>Invalid</div>;
  }
}
