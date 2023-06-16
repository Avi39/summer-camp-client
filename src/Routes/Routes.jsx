import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import ManageClasses from "../pages/Dashboard/MyCart/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import InstructorClasses from "../pages/Dashboard/MyInstructorClasses/InstructorClasses";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'instructor',
          element:<Instructor></Instructor>
        },
        {
          path:'classes',
          element:<Classes></Classes>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        },
        {
          path:'manageClasses',
          element:<ManageClasses></ManageClasses>
        },
        {
          path:'manageUsers',
          element:<ManageUsers></ManageUsers>
        },
        {
          path:'addClass',
          element:<ManageUsers></ManageUsers>
        },
        {
          path:'instructorClasses',
          element:<InstructorClasses></InstructorClasses>
        }
      ]
    }
  ]);