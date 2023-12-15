
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import useAuth from '../../CustomHooks/useAuth';
// import { useContext } from 'react';
// import { AuthContext } from '../../AuthProvider/AuthProvider';


const SignUp = () => {

  const {createUser} = useAuth()

    // const {createUser} = useContext(AuthContext)
    
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
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
      <form onSubmit={handleSignUp} className="card-body">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
        </div>
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
         <input className='btn btn-primary' type="submit" value="Sign up" />
        </div>
      </form>
      <p className='text-center my-2'>Already have an account? Go <Link className='text-red-600 font-bold' to = '/login'>Login here.</Link></p>
    </div>
  </div>
</div>
    );
};

export default SignUp;