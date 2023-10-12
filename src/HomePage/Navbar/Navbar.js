import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark myClr">
                <Link to='/' className="navbar-brand title " id='CSM' href="#">
                    <div>
                        <p className='itemInside'>Cheat Sheet Mania</p>
                        <p className='mini'>... Believe in Qulaity</p>
                    </div>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse mynavBar" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">
                                <p className='itemInside'>Home <span className="sr-only">(current)</span></p>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link active" to="/courses">
                                <p className='itemInside'>Courses</p>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link active" to="/digitalNotes">
                                <p className='itemInside'>Digital Notes</p>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link active" to="/contact">
                                <p className='itemInside'>Contact</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <hr style={{backgroundColor:"white",padding:"0px",margin:"0px"}}/>
        </>
    );
};

export default NavBar;