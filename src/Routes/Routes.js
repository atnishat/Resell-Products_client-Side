import { createBrowserRouter } from "react-router-dom";
import Categories from "../Components/Pages/Categories/Categories/Categories";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
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
                path:'/categories',
                element:<Categories></Categories>
            }
        ]
    }
])