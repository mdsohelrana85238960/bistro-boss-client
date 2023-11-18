import { useContext, useEffect,  useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';
import SocialLogin from '../Sheard/SocialLogin';


const Login = () => {
  
  const navigate = useNavigate()
  const {signIn} = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true)
  const from = location.state?.from?.pathname || '/' 



    useEffect(() =>{[
        loadCaptchaEnginge(6)
    ]},[])
    const handleLogin = (e) =>{
        e.preventDefault();
        const form =  e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

         signIn(email,password)
        .then(result => {
          console.log(result.user)
          swal("Good job!", "Login Successfully!", "success");
          navigate(from, {replace:true});
        })
        
    }

    const handleValidateCaptcha = (e) =>{
        const value = e.target.value;
        if (validateCaptcha(value)) {
            setDisabled(false)
        }
    }
    return (
        <>
          <Helmet >
            <title>Bistro Boss | Login</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center w-[500px] lg:text-left">
      <h1 className="text-5xl  font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
        
          <input type="text" onBlur={handleValidateCaptcha} name="captcha" placeholder="Type the text captcha" className="mb-4 input input-bordered" required />
          <LoadCanvasTemplate />
          {/* <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'> Validate </button> */}
        </div>
        <div className="form-control mt-6">
      
          <input type="submit" className="btn btn-primary" disabled={disabled} value="Login" />
        </div>
       
       <SocialLogin></SocialLogin>

      </form>
      <p className='text-center'> New here ? <Link className='text-indigo-700' to='/register'>Register</Link> </p>
    </div>
  </div>
</div>
</>
    );
};

export default Login;