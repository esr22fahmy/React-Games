import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProdectRoute({ dataToken, children }) {
    
    if ((dataToken == null) && (localStorage.getItem("token") == null)) {
        return <Navigate to='/'/>;
    } else {
        return children;
    }
    

}
