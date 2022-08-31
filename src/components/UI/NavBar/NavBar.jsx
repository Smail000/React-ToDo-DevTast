import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css" 

export default function NavBar(props) {
    return (
        <nav>
            <div className="outbox">
                <div className="box">
                    <ul className="navigation">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/docs">Docs</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}