import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout({dataToken ,funLogout }) {
  return (<>
   
    <Navbar dataToken={dataToken} funLogout={funLogout}/>
    <Outlet></Outlet>
  
  
  </>
  )
}
