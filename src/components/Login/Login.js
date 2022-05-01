import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import './login.css'
const Login = () => {
    // Login UI 
    const [open, setOpen] = useState(false);

    //Social Media login
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    // handle Email password Registration
    const [createUserWithEmailAndPassword, registeredUser, registerLoading, registerError, ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
    

    // update registration user name
    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

    // handle login with email password
    const [signInWithEmailAndPassword,  loggedUser, loginLoading, loginError,] = useSignInWithEmailAndPassword(auth);
        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || "/";

    // handle registration function
    const handleRegistration = async(e)=>{
        e.preventDefault()
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName })
        console.log(email, password);
    }

    //handle login function 
    const handlelogin = async (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        toast.success('Please Wait')
     await signInWithEmailAndPassword(email, password)
        
    }

    // handle loading
    if (googleLoading || loginLoading || updating || registerLoading || facebookLoading || githubLoading) {
        return <div className="flex items-center justify-center"><progress className="progress mt-[20%] w-56"></progress></div>
      }

      //handle error
      if (googleError || registerError || loginError || updateProfileError || facebookError || githubError) {
        toast.error(`${googleError? googleError.message.slice(22,) : ''} ${githubError? githubError.message.slice(22) : ''} ${facebookError? facebookError.message.slice(22) : ''} ${registerError? registerError.message.slice(22,) : ''} ${loginError? loginError.message.slice(22,) : ''}  ${updateProfileError? updateProfileError.message.slice(22,) : ''}`, {id:'loginError'})
      }

      //handle user
      if (facebookUser || registeredUser || loggedUser || githubUser || googleUser) {
          toast.success('Successfully Logged in', {id: 'logged in'})
        navigate(from, { replace: true });
      }

      //login/registration form
    return (
        <div className=''>
            <div className={`container ${open? 'right-panel-active' : ''}`} id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={handleRegistration}>
                        <h1 className='text-2xl text-slate-600'>Create Account</h1>
                        <div className="social-container">
                            <a href="#" onClick={()=>signInWithFacebook()} className="social hover:bg-blue-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" onClick={()=>signInWithGoogle()} className="social  hover:bg-rose-500 hover:text-white"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social  hover:bg-blue-600 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input required className="mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" type="text" name='name' placeholder="Name" />
                        <input required className="mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" type="email" name='email' placeholder="Email" />
                        <input required className="mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" type="password" name='password' placeholder="Password" />
                        <button className="mt-5">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={handlelogin}>
                        <h1 className='text-2xl text-slate-600'>Sign in</h1>
                        <div className="social-container">
                            <a href="#" onClick={()=>signInWithFacebook()} className="social hover:bg-blue-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" onClick={()=>signInWithGoogle()} className="social  hover:bg-rose-500 hover:text-white"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social  hover:bg-blue-600 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input required className="mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" type="email" name='email' placeholder="Email" />
                        <input required className="mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"type="password" name='password' placeholder="Password" />
                        <a className='text-sm my-4 hover:text-pink-500' href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p className='my-3'>To keep connected with us please login with your personal info</p>
                            <button className="ghost" onClick={()=>{setOpen(!open)}} id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p className='my-3'>Enter your personal details and start journey with us</p>
                            <button className="ghost" onClick={()=>{setOpen(!open)}} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;