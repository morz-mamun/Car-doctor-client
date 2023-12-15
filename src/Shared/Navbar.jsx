
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
  }

    const navLinks = <>
        <NavLink to = '/'> <li>Home</li></NavLink>
        <NavLink to = '/'> <li>About</li></NavLink>
        <NavLink to = '/signup'> <li>Sign Up</li></NavLink>

        {
          user?.email ? <>
          <NavLink to = '/bookings'> <li>My Bookings</li></NavLink>
            <li><button onClick={handleLogOut}>Log Out</button></li>
          </> : 
          <NavLink to = '/login'> <li>Login</li></NavLink>
        }
        
        </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case">
      <img className='' src={logo} alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;