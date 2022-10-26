import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext'
import { AwesomeButton } from 'react-awesome-button';


import './NavBarStyle.css'

function NavbarReview() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth();
    const nav = useNavigate();

    const handleNav = () => {
        nav('/login')
    }




    async function handleLogout() {
        // window.prompt('请输入喜欢的内容')
      

      }
    return (
        <div name='navbar' className={'navbar'}>
            <div className={'logo'}>
                <h2>ARTNIFTIAL.</h2>
            </div>
            <ul className="nav-menu">
            </ul>
            <div>
            <AwesomeButton id = "review" type="secondary" onPress={handleLogout}>Review</AwesomeButton></div> 
         

        </div>
    )
}

export default NavbarReview