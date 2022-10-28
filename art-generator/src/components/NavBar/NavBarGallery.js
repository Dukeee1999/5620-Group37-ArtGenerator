import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext'
import { AwesomeButton } from 'react-awesome-button';


import './NavBarStyle.css'

function NavbarLogin() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth();
    const nav = useNavigate();
    const handleNav = () => {
        nav('/login')
    }
    return (
        <div name='navbar' className={'navbar'}>
            <Link to ="/" className={'logo'} style={{color:'white'}}>
                <h2>ARTNIFTIAL.</h2>
            </Link>

        </div>
    )
}

export default NavbarLogin