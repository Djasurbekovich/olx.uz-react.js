import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './Auth.scss';

const Auth = () => {
    return (
        <div className='auth'>
            <div className='auth__cicle'></div>
            <div className='auth__form'>
                <ul className='auth-form__nav'>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ?
                        'nav-link active' : 'nav-link')} to='/auth/login'>Kirish</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ?
                        'nav-link active' : 'nav-link')} to='/auth/create'>Ro'yxatdan o'tish</NavLink>
                    </li>
                </ul>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Auth;