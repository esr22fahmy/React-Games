import React, { useEffect, useState } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Login from '../Login/Login';
import Platforms from '../Platforms/Platforms';
import Categories from '../Categories/Categories';
import Sortby from '../Sortby/Sortby';
import All from '../All/All';
import Logout from '../Logout/Logout';
import Join from '../Join/Join';
import jwtDecode from "jwt-decode";
import ProdectRoute from "../ProdectRoute/ProdectRoute";
import Details from "../Details/Details";
import PlayNow from "../PlayNow/PlayNow";
import { Offline, Online } from "react-detect-offline";

// import Pc from "../Pc/Pc";
// import Browser from '../Browser/Browser'


export default function App() {

  let [dataToken, setdetaToken] = useState(null);

  let saveData = () => {

    let encodedToken = localStorage.getItem("token");
    let deencodedToken = jwtDecode(encodedToken);
    setdetaToken(deencodedToken);
    console.log(dataToken);
    
  }
  let funLogout = () => {
    localStorage.removeItem("token");
    setdetaToken(null);
    // console.log("h");
    return <Navigate to="" />;

  }

useEffect(() => {
  if (localStorage.getItem("token")) {
    saveData();
  }

  
}, [])

   let routes = createBrowserRouter([
     {
       path: "/",
       element: <Layout dataToken={dataToken} funLogout={funLogout} />,
       children: [
      //  path:'*'علشان يفتح علي الجت
         { path:'*', element:<Login/>},
         { index: true, element: <Login saveData={saveData} /> },
         { path: "home", element:<ProdectRoute dataToken={dataToken} > <Home /> </ProdectRoute>},
         { path: "all", element:  <ProdectRoute dataToken={dataToken}> <All /> </ProdectRoute>},
         { path: "platforms/:path", element: <ProdectRoute dataToken={dataToken}> <Platforms />  </ProdectRoute> },
         { path: "sortby/:path", element: <ProdectRoute dataToken={dataToken}> <Sortby /> </ProdectRoute> },
         { path: "categories/:path", element: <ProdectRoute dataToken={dataToken}> <Categories /> </ProdectRoute> },
         { path: "details/:id", element: <ProdectRoute dataToken={dataToken}> <Details /> </ProdectRoute> },
         { path: "playnow/:id", element: <ProdectRoute dataToken={dataToken}> <PlayNow /> </ProdectRoute> },

         { path: "join", element: <Join /> },
         { path: "logout", element: <Logout /> },
        
       ],
     },
   ]);
  return (
    <>
      <div>
      <RouterProvider router={routes} />
      </div> 
    </>
  );
   
 
}
