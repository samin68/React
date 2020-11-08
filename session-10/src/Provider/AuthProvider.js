import React from 'react';
import {signup} from '../firebase/signin'



export const firebaseAuth = React.createContext()

const handleSignup = () => {
  // middle man between firebase and signup 
      console.log('handleSignup')
 // calling signup from firebase server
      return signup()
}


const AuthProvider = (props) => {
  return (
    <div>
      <firebaseAuth.Provider
         value={{
       //  test: "context is working"
       handleSignup
           }}>
             {props.children}

      </firebaseAuth.Provider> 
    </div>
  );
};

export default AuthProvider;