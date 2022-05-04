import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import auth from '../../firebase/firebase.init';
const Nav = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <p className='text-center text-slate-300'>initializing navbar ....</p>
  }
  return (
    <div className="bg-slate-50 max-h-16 ">
      <div className="navbar w-10/12 mx-auto p-0 ">
        <div className="flex-1">
          <div className='flex items-center justify-between w-full'>
            <Link to='/'><img className="w-36" src={logo} alt="" /></Link>

            <ul className='flex'>
              <li className='mr-7 hover:text-rose-600 duration-300'><Link to="/blogs">Blogs</Link></li>
              <li className='mr-7 hover:text-rose-600 duration-300'><Link to="/aboutUs">About Us</Link></li>
            </ul>

          </div>
        </div>
        <div className="flex-none">
          {
            user ? <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=33791" />
                </div>
              </label>
              <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a href="#" className=" m-0">
                    Profile
                  </a>
                </li>
                <li><Link to="manageProducts" className='m-0'>Manage items</Link></li>
                <li><Link to="addProduct" className='m-0'>Add Item</Link></li>
                <li><Link to="/myItems" className='m-0'>My Items</Link></li>
                <li><a href="" onClick={() => signOut(auth)} className='m-0'>Logout</a></li>
              </ul>
            </div> : <div className="tooltip tooltip-left" data-tip="Login/Register">
              <Link to="/login" className='btn m-0 btn-circle'><i className="fa-solid fa-user-plus"></i></Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Nav;