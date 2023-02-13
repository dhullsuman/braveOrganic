import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

export default function UserRequireAuth({ children }) {
    const {pathname}= useLocation()
    const isLogin = useSelector((a) => a.userReducer.isLogin)
    console.log(pathname)
    if (isLogin) {
        return children;
    } else {
        return (
            <Navigate to="/login" state={{from:pathname}} replace />
        )
    }
}