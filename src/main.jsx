import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import Home from './layout/Home';
import Shop from './component/shop/Shop';
import Orders from './component/orders/Orders';
import Inventory from './component/inventory/Inventory';
import Login from './component/login/Login';
import cartProductsLoader from './loader/CartLoader';
import Cheakout from './component/proceedOrder/Cheakout';
const router=createBrowserRouter([
   {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:"/orders",
        element:<Orders></Orders>,
        loader:cartProductsLoader
      },
      {
        path:'/inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:"cheakout",
        element:<Cheakout></Cheakout>
      }
    ]
   }
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
