import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase/firebase.init';
import './login.css'
const Login = () => {
    const [open, setOpen] = useState(false);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [createUserWithEmailAndPassword, registeredUser, registerLoading, registerError, ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
    const HandleRegistration = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
        console.log(email, password);
    }
    if (googleLoading) {
        return <progress class="progress w-56"></progress>;
      }
      if (googleError || registerError) {
        return (
          <div>
            <p>Error: {googleError.message}</p>
            {/* <p>Error: {registerError.message}</p> */}
          </div>
        );
      }
      if (facebookUser) {
        return (
          <div>
            <p>Signed In User: {facebookUser.email}</p>
          </div>
        );
      }
    return (
        <div className=''>
            <div className={`container ${open? 'right-panel-active' : ''}`} id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={HandleRegistration}>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" onClick={()=>signInWithFacebook()} className="social hover:bg-blue-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" onClick={()=>signInWithGoogle()} className="social  hover:bg-rose-500 hover:text-white"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social  hover:bg-blue-600 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" name='name' placeholder="Name" />
                        <input type="email" name='email' placeholder="Email" />
                        <input type="password" name='password' placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" onClick={()=>signInWithFacebook()} className="social hover:bg-blue-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" onClick={()=>signInWithGoogle()} className="social  hover:bg-rose-500 hover:text-white"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social  hover:bg-blue-600 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" onClick={()=>{setOpen(!open)}} id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" onClick={()=>{setOpen(!open)}} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;