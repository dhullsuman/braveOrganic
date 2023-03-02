import { useToast } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

export default function UserRequireAuth({ children }) {
    const { pathname } = useLocation();
  const toast = useToast();
    const isLogin = useSelector((a) => a.userReducer.isLogin)
    React.useEffect(() => {
        if (!isLogin) {
            toast({
                title: 'Please Login.',
                description: "Due to security reason You redirect to login",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        }
    },[isLogin])
    if (isLogin) {
        return children;
    } else {
        return (
            <Navigate to="/login" state={{from:pathname}} replace />
        )
    }
}