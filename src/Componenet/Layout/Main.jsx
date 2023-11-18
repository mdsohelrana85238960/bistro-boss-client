import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";


const Main = () => {
    const location = useLocation();
    const noNavFot = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            { noNavFot || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noNavFot || <Footer></Footer>}
        </div>
    );
};

export default Main;