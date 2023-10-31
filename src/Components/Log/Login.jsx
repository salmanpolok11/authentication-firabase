import { useState } from "react";
import app from "../../firebase.init";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'


const Login = () => {
  const [user, setuser] = useState(' ')
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const githubProvaider = new GithubAuthProvider();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then(res => {
        const login = res.user;
        console.log(login);
        setuser(login)
      })

      .catch(error => {
        console.log("error", error.meassage);
      })
  }

  const  handleGithub = () =>{
      signInWithPopup(auth , githubProvaider)
      .then( res => {
         const gitLog = res.user;
         console.log(gitLog);
         setuser(gitLog)
      })
  }


  const handleSingOut = () => {
    signOut(auth, provider)
      .then(res => {
        console.log(res);
        setuser(null)
      })
  }



  return (
    <div className=" mt-10">

      {
        user && <div className=" mb-5  w-60 mx-auto shadow-md p-7   ">
          <img className=" rounded-full mx-auto" src={user.photoURL} alt="" />
          <h1>{user.displayName}</h1>
          <h1>{user.email}</h1>


        </div>

      }

      {
        user ?

          <button
            onClick={handleSingOut}
            className="btn btn-outline btn-primary">LogOut</button> :

          <div className=" space-x-4">
            <button onClick={handleClick}
              className="btn btn-outline btn-primary">Login</button>

            <button onClick={handleGithub}
              className="btn btn-outline btn-error"> GitHub Login</button>

          </div>




      }


    </div>
  );
};

export default Login;