import React from 'react'
import { Link } from "react-router-dom"
import "./styles.css"
export default function Appbar() {
    return (
        <nav className="appbar-menu has-background-light ">
            <div className="brand-container">
                <img src="https://www.flaticon.es/svg/static/icons/svg/814/814133.svg" alt="" />
            </div>
            <ul className="menu-list container">
                <li className="menu-item"><Link to="/" href="##">menuIt</Link></li>
                <li className="menu-item"><Link to="/" href="##">menuIt</Link></li>
                <li className="menu-item"><Link to="/" href="##">menuIt</Link></li>
                <li className="menu-item"><Link to="/" href="##">menuIt</Link></li>
                <li className="menu-item"><Link to="/" href="##">menuIt</Link></li>
            </ul>
        </nav>
    )
}
