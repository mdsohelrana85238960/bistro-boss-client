import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Orders from "../pages/Orders";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Secret from "../pages/Secret";
import PrivateRoute from "./PrivateRoute";
// import DashBoard from "../Layout/DashBoard";
import Cart from "../DashBoardPage/Cart";
// import AllUsers from "../Layout/AllUsers";
import AddItems from "../DashBoardPage/AddItems";
import DashBoard from "../DashBoardPage/DashBoard";
import AllUsers from "../DashBoardPage/AllUsers";
import ManageItems from "../DashBoardPage/ManageItems";
import AdminRoute from "./AdminRoute";
import UpdateItems from "../DashBoardPage/UpdateItems";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
        {
            path:'/orders/:category',
            element:<Orders></Orders>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/secret',
            element:<PrivateRoute> <Secret></Secret> </PrivateRoute>
        },
        
      ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute> <DashBoard></DashBoard> </PrivateRoute>,
        children:[
            //normal user routes
        {
            path:'cart',
            element:<Cart></Cart>
        },
        

        // admin 
         {
            path:'users',
            element:<AdminRoute> <AllUsers></AllUsers> </AdminRoute>
         },
         {
            path:'addItem',
            element:<AddItems></AddItems>
         },
         {
            path:'UpdateItems/:id',
            element: <AdminRoute> <UpdateItems></UpdateItems> </AdminRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
         },
         {
            path:'manageItem',
            element:<ManageItems></ManageItems>
        },


        ]
    }
  ]);

export default router;