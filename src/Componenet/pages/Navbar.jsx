import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { BsFillCartCheckFill } from 'react-icons/Bs';
import useCarts from "../hooks/useCarts";

const Navbar = () => {
  const {user,LogOut} = useContext(AuthContext);
  const [cart] = useCarts();

  const handleSignOut = () =>{
    LogOut()
  
  }
    const navOptions = <> 
    
              <li className="justify-center"> <Link to='/'> Home </Link> </li>
              <li className="justify-center"> <Link to='/menu'> Our Menu </Link> </li>
              <li className="justify-center"> <Link to='/orders/salad'> Orders Foods </Link> </li>
              <li className="justify-center"> <Link to='/secret'> Secret </Link> </li>

              <li className="justify-center"> <Link to='/dashboard/cart'> 

              <button className="btn ">
              <BsFillCartCheckFill></BsFillCartCheckFill>
              <div className="badge badge-secondary">+{cart.length}</div>
              </button>
              
               </Link> </li>
              

             {
                user ? <>  <button onClick={handleSignOut}  className="flex justify-center items-center btn-lg btn btn-ghost">Log Out</button> </> : 
                <>  <Link className="flex justify-center items-center" to='/login'> Login </Link>  </>
              }
              
    </>
    return (
        <div className="navbar  fixed text-white z-10 opacity-60 bg-black max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu text-black  menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
              
            {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navOptions}

          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <> <span> {user?.displayName} </span> </> : <>  </>
          }
        </div>
      </div>
    );
};

export default Navbar;