import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PriviteRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    

    if (loading) {
       return (
        <div className='flex justify-center items-center flex-col h-screen'>
            <span className="loading bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  w-10 md:20 lg:w-32"></span>
            </div>)
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname}  to='/login'></Navigate>
};

export default PriviteRoute;


// 10.58