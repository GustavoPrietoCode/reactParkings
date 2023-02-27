import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav>
    
            <ul>

                <NavLink 
                    className="nav-item" 
                    to="/"
                    >
                    Home
                </NavLink>


                <NavLink 
                    className="nav-item" 
                    to="/about"
                    >
                    About
                </NavLink>

                <NavLink 
                    className="nav-item" 
                    to="/parking"
                    >
                    ParkingPage
                </NavLink>
   
            </ul>

        </nav>
    )
}