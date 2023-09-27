import React from "react";
import "./header.css";

const Header = () => {
    return(
       <div className="nav">
        <img src="logo192.png" alt="Brand Mark"/>
            <ul>
                <li><a href="https://www.google.com">Home</a></li>
                <li><a href="https://www.google.com">About</a></li>
                <li><a href="https://www.google.com">Menu</a></li>
                <li><a href="https://www.google.com">Reservation</a></li>
                <li><a href="https://www.google.com">Order Online</a></li>
                <li><a href="https://www.google.com">Login</a></li>
            </ul>
       </div>
    );
};
export default Header;
