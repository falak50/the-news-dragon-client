import {Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import LoginLayout from "../layouts/LoginLayout";
import PrivateRoute from "../providers/PrivateRoute";
import Terms from "../Terms/Terms";
{/*  */}
  const router = createBrowserRouter([
    {
               path:'/',
               element:<LoginLayout></LoginLayout>,
               children: [
                {
                  path:'/',
                  element:<Navigate to="category/0"></Navigate>
                },
                {
                  path:'login',
                  element:<Login></Login>
                },
                {
                  path:'register',
                  element:<Register></Register>
                },
                {
                  path:'terms',
                  element:<Terms></Terms>
                }
               ]
    },
    {
      path: 'category',
      element: <Main></Main>,
      children: [
        {
            path:':id',
            element:<Category></Category>,
            loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        },
        
      ]
    },

    {
      path:'news',
      element:<NewsLout></NewsLout>,
      children : [
         {
          path:':id',
          element:<PrivateRoute><News></News></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)

         }
      ]
    }
    
  ]);


  export default router;