import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light myClr">
                <Link to='/' className="navbar-brand title " href="#">
                    <div>
                        <p className='itemInside'>Cheat Sheet Mania</p>
                        <p className='mini'>... Believe in Qulaity</p>
                    </div>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown ">
                    <div className="restOptions ml-auto">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">
                                    <p className='itemInside'>Home <span className="sr-only">(current)</span></p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/courses">
                                    <p className='itemInside'>Courses</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/digitalNotes">
                                    <p className='itemInside'>Digital Notes</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">
                                    <p className='itemInside'>Contact</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar