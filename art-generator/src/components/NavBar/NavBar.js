import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext'
import { AwesomeButton } from 'react-awesome-button';


import './NavBarStyle.css'

function Navbar() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth();
    const nav = useNavigate();
    const handleNav = () => {
        nav('/login')
    }
    async function handleLogout() {
        setError("")
        try {
          await logout()
          nav("/")
        } catch {
          setError("Failed to log out")
        }
      }
    return (
        <div name='navbar' className={'navbar'}>
            <div className={'logo'}>
                <h2>ARTNIFTIAL.</h2>
            </div>
            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Artworks</li></Link>
                <Link to='aboutus' smooth={true} duration={500} ><li>About us</li></Link>
            </ul>
            {
                currentUser ? <div className={'user'}><text>{currentUser.email}</text> <AwesomeButton type="secondary" onPress={handleLogout}>Logout</AwesomeButton></div> : 
                <div className="nav-icons" onClick={handleNav}>
                    <BsPerson className='icon' />
                </div>
            }

        </div>
    )
}

export default Navbar