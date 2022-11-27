import { createBrowserRouter } from "react-router-dom";
import Categories from "../Components/Pages/Categories/Categories/Categories";
import AllUsers from "../Components/Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";
import MyAppointment from "../Components/Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Product from "../Components/Pages/Products/Product";
import SignUp from "../Components/Pages/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import PrivateRoute from "./Privateroutes/PrivateRoute";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/categories/:id',
                element:<Categories></Categories>
            },
            {
                path:'/category/:id',
                element:<Product></Product>,
                loader: ({params})  => fetch(`http://localhost:5000/category/${params.id}`)
                
            }
        
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/allusers',
                element:<AllUsers></AllUsers>
            },
        ]
    }
])