import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light myClr">
                <a className="navbar-brand title " href="#">
                    <div>
                    <p className='itemInside'>Cheat Sheet Mania</p>
                    <p className='mini'>... Believe in Qulaity</p>
                    </div>
                </a>
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
                                <a className="nav-link" href="#">
                                    <p className='itemInside'>Home <span className="sr-only">(current)</span></p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <p className='itemInside'>Courses</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <p className='itemInside'>Digital Notes</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <p className='itemInside'>Contact</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar