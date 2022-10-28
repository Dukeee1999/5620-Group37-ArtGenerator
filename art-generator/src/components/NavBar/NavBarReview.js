import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext'
import { AwesomeButton } from 'react-awesome-button';
import { useLocation } from 'react-router-dom';
import { useContext } from "react";
import './NavBarStyle.css';

function NavbarReview() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth();
    const nav = useNavigate();
    const location = useLocation();
    const navigate = useNavigate()
    const handleNav = () => {
        nav('/login')
    }




    async function handleLogout() {
        // var user = localStorage.getItem("user")
        const code = location.pathname.split("/")[1];
        // console.log(`/${code}/submitreview`);

        // console.log(`/${code}/submitreview`);
        nav(`/${code}/submitreview`)
        // window.prompt('请输入喜欢的内容')

      }
    return (
        <div name='navbar' className={'navbar'}>
            <Link to="/" className={'logo'} style={{color:"white"}}>
                <h2>ARTNIFTIAL.</h2>
            </Link>
            <ul className="nav-menu">
            </ul>
            <div>
            <AwesomeButton id = "review" type="secondary" onPress={handleLogout}>Review</AwesomeButton></div> 
         

        </div>
    )
}

export default NavbarReview