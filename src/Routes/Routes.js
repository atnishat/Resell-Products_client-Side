import { createBrowserRouter } from "react-router-dom";
import Categories from "../Components/Pages/Categories/Categories/Categories";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Product from "../Components/Pages/Products/Product";
import SignUp from "../Components/Pages/SignUp/SignUp";
import Main from "../Layout/Main";



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
                path:'/categoriesOption/:id',
                element:<Product></Product>,
                loader: ({params})  => fetch(`http://localhost:5000/categoriesOption/${params.id}`)
                
            }
        
        ]
    }
])