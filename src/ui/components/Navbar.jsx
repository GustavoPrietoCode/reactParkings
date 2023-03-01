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
                    to="/bibliotecas"
                    >
                    Bibliotecas
                </NavLink>

                <NavLink 
                    className="nav-item" 
                    to="/contacto"
                    >
                    Contacto
                </NavLink>

                
   
            </ul>

        </nav>
    )
}