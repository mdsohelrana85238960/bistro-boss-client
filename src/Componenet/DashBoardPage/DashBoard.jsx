import { BsFillCartCheckFill, } from "react-icons/Bs";
import { FaAd, FaCalendar, FaHome, FaList, FaBook } from "react-icons/Fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";
import { MdEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUsers ,FaUtensils} from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
    const [carts] = useCarts();
    //todo get
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-200 ">
            <ul className="menu">

            {
                isAdmin ? <> 
                <li>  <NavLink to='/dashboard/adminHome'> <FaHome></FaHome>Admin Home</NavLink></li>

                <li>  <NavLink to='/dashboard/addItem'> <FaUtensils /> Add items</NavLink></li>

                <li>  <NavLink to='/dashboard/manageItem'> <GiHamburgerMenu /> Manage items</NavLink></li>

                <li>  <NavLink to='/dashboard/manageBooking'> <FaBook /> Manage bookings </NavLink></li>

                <li>  <NavLink to='/dashboard/users'> <FaUsers /> All users</NavLink></li>
                </>
                :
                <>
                <li>  <NavLink to='/dashboard/userHome'> <FaHome></FaHome>User Home</NavLink></li>

            <li>  <NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation</NavLink></li>

            <li>  <NavLink to='/dashboard/addReview'> <FaAd></FaAd> Add review</NavLink></li>

            <li>  <NavLink to='/dashboard/cart'> <BsFillCartCheckFill></BsFillCartCheckFill> My Cart ({carts.length}) </NavLink></li>

            <li>  <NavLink to='/dashboard/booking'> <FaList></FaList> My booking</NavLink></li>
                </>
            }

            <div className="divider divider-warning"></div>

            <li>  <NavLink to='/'> <FaHome></FaHome>Home</NavLink></li>

            
            <li>  <NavLink to='/order/menu'> <GiHamburgerMenu /> Menu</NavLink></li>

            <li>  <NavLink to='/dashboard/shop'> <GiShoppingBag /> Shop</NavLink></li>


            <li>  <NavLink to='/dashboard/contact'> <MdEmail></MdEmail> Contact</NavLink></li>

            </ul>
            </div>

            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;