import * as React from "react"
import './Header.css'

function Header() {
    return (
        <header>
            <div className="wrapper">
                <h1>Abel Beak</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;