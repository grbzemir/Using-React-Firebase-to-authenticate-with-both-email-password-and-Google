import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/components/Navbar.css'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {


    const logoutFunc = async () => {
        toast.success('Logout Successfully')
        await signOut(auth)
        setTimeout(() => {
            window.location = '/'
        }, 5000);
    }
    return (

        <div className="navbar">
            <div className="navbar-left">Firebase</div>
            <div onClick={logoutFunc} className="navbar-right">Logout</div>
        </div>
    )
}

export default Navbar
