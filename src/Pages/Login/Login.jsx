
import login from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import useAuth from '../../CustomHooks/useAuth';
const Login = () => {
  const {loginUser} = useAuth()
    // const {loginUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
   

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        loginUser(email, password)
        .then(result => {
            const loggedInUser = result.user
            console.log(loggedInUser);


          // const user = {email}
          // axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
          // .then(res => {
          //   console.log(res.data);
          //   if(res.data.success){
          //      navigate(location?.state ? location.state : '/')
          //   }
          // })
        })
        .catch(e => {
            console.log(e.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left w-1/2">
      
      <img src={login} alt="" />
    </div>

    <div className="card w-1/2 shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         <input className='btn btn-primary' type="submit" value="Login" />
        </div>
      </form>
      <p className='text-center my-2'>New in car doctor? Go <Link className='text-red-600 font-bold' to = '/signup'>Sign up here..</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;