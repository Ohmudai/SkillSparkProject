import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider= ({children})=>{
  const [token,setToken] =useState("");

  return (
   
      <AuthContext.Provider value={{token,setToken}}>
      {children}
    </AuthContext.Provider>
   

  )
}

export default AuthProvider;



