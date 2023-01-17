import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function Header () {
  const { loginWithRedirect,logout,isAuthenticated,isLoading,user } = useAuth0();
  if(isLoading){
    return <div>Loading ...</div>
  }

  return (
    <div className='ui fixed menu'>
        <div className='ui container center'>
            <h2>My Online Shop</h2>
           
        </div>
        <div> 
         {isAuthenticated ?<div> <span>Welcome !!! {user.name} </span>
          <button className='ui primary button' onClick={() => logout({ returnTo: window.location.origin })}>
         Log Out
       </button>
       </div>:
         <button className='ui primary button' onClick={() => loginWithRedirect()}>Log In</button>
         }
          </div>
    </div>
  )
}
