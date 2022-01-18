import React from "react";
import { NavLink, Switch } from 'react-router-dom';
import NotFoundPage from "../NotFoundPage";

function Header() {
    const activeStyle = {
        color: "orange"
    };
    
    return (
        <nav>
            <NavLink activeStyle={activeStyle} to="/" exact>Home</NavLink> | {" "}
            <NavLink activeStyle={activeStyle} to="/courses">Courses</NavLink>  | {" "}
            <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
        </nav>
    );
}

export default Header;