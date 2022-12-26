import React from 'react'
import Image from 'next/image'
import { auth,provider } from "../firbase/Firebase";
import { LogIn }  from '../../state/action/Action'
import { useDispatch } from 'react-redux';

export default function Login() {
  const Dispatch = useDispatch()

    const signIn = () => {
        auth
          .signInWithPopup(provider)
          .then((result) => {
            console.log(result.credential.idToken)
            localStorage.setItem('jwt',result.credential.idToken)
            Dispatch(LogIn({user : 'login' }))
          })
          .catch(() => alert("sorry,you cannot sign in"));
      };
  return (
    <>
    <main>
 <div className='logo'>
 <Image
      src="/log.jpg"
      alt="Picture of the author"
      width={100}
      height={100}
    />
 </div>

  
  <div className="btn">
<button class="google" onClick={signIn}>
  Login with Google
</button>
<h3>or</h3>
      <button class="facebook">
  Login with Facebook
</button>
</div>
</main>

    </>
  )
}
