import React from 'react';
import NavigationBar from '../pages/share/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
           <NavigationBar></NavigationBar> 
           <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;