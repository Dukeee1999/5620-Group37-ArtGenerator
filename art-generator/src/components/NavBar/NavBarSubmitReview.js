import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext'
import { AwesomeButton } from 'react-awesome-button';
import { useLocation } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';

import './NavBarStyle.css'

function NavbarSubmitReview() {
    const [error, setError] = useState("")
    const nav = useNavigate();
    const location = useLocation();
    const { currentUser, logout } = useAuth();

    console.log(currentUser.name);
    const handleNav = () => {
        nav('/login')
    }




    async function handleLogout() {
        const code = location.pathname.split("/")[1];
        nav(`/${code}/review`)

      }
    return (
        <div name='navbar' className={'navbar'}>
            <div className={'logo'}>
                <h2>ARTNIFTIAL.</h2>
            </div>
            <ul className="nav-menu">
            </ul>
            <div>
            <AwesomeButton id = "review" type="secondary" onPress={handleLogout}>View All </AwesomeButton>
            </div> 
         

        </div>
    )
}


export default NavbarSubmitReview