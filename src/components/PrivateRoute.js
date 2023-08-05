import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({isLogin, children}) => {
        if(isLogin){
            return children;
        }
        else{
            return <Navigate to='/login/'></Navigate>
        }
}
