import {NavLink , useLocation} from "react-router-dom";
import MyRouter , {Hope} from "../router"
import SearchBar from "../search-bar"
import SignIn from "../buttons"
import './index.css'
import React ,{ useEffect, useRef, useState } from "react";
import { UnorderedListOutlined } from "@ant-design/icons";

export default function Header(){

    const [active , setActive] = useState(true);

    const app = () => {
        setActive(!active)
    }

    

    return(
        <header className="header">
            <div className="container">
                <div className="logo">
                    <NavLink to="/">JAMAL TV</NavLink>
                </div>
                <nav className={`nav-bar ${active ? "normal-nav-bar" : ""}`}>
                    <UnorderedListOutlined onClick={app} className={`menu-icon ${active ? "normal-menu" : ""}`}/>
                    <ul className="navbar"> 
                        <li>
                            <NavLink to="/movies">Movies</NavLink>
                        </li>
                        <li>
                            <NavLink to="/series">Series</NavLink>
                        </li>
                        <li>
                            <NavLink to="/genre">Genre</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact-us">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sign-up">Sign Up</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="left-side">
                <SignIn className="sign-in"/>
                <SearchBar className="sb"></SearchBar>
                </div>
            </div>
        </header>
    ) 
}
