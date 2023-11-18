import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import { updateProfile } from "firebase/auth";
import swal from "sweetalert";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogin from "../Sheard/SocialLogin";

    

   

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const {register, reset, handleSubmit, formState: { errors }} = useForm();
    const {createUser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email,data.password)
        .then(result =>{
            console.log(result.user)
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
              //create user entry in the database//
              const userInfo = {
                name:data.name,
                email:data.email
              }
              axiosPublic.post('/users', userInfo)
              .then(res => {
                
                if (res.data.insertedId) {
                  console.log('user add database')
                  reset();
              swal("Good job!", "User created Successfully!", "success");
              navigate('/')
                }
               
              })
              
              
            })
            .catch(error => console.log(error))
        })
    }




    // const handleRegister = (e) =>{
    //     e.preventDefault();
    //     const form =  e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email,password)
    // }

    return (
        <>
          <Helmet >
            <title>Bistro Boss | Register</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center w-[500px] lg:text-left">
      <h1 className="text-5xl  font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          {/* 
          used react-hook-form
          used react-hook-form
          used react-hook-form
          used react-hook-form
          used react-hook-form
           */}
          <input type="text" {...register('name',{ required: true })} name="name" placeholder="Name" className="input input-bordered"  />
          {errors.name && <span className="text-red-600">This field is </span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" {...register('photoURL',{ required: true })}  placeholder="Photo url" className="input input-bordered"  />
          {errors.photoURL && <span className="text-red-600">Photo url is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register('email',{ required: true })} name="email" placeholder="email" className="input input-bordered"  />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register('password',  { required: true ,minLength:6, maxLength:20, pattern:/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })} name="password" placeholder="password" className="input input-bordered"  />
          {errors.password?.type === 'required' && <span className="text-red-600">This field is required</span>} 
          {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 character</span>} 
          {errors.password?.type === 'pattern' && <span className="text-red-600">Password must set hard character</span>} 

        </div>
        
        <div className="form-control mt-6">
      
          <input type="submit" className="btn btn-primary" value="Register" />
        </div>
        <SocialLogin></SocialLogin>
      </form>
      <p className='text-center'> Already register ? <Link className='text-indigo-700' to='/login'>Login</Link> </p>

    </div>
  </div>
</div>
</>
    );
};

export default Register;