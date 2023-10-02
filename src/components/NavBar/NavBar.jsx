import { Link } from "react-router-dom"
import './navBar.sass'

export const NavBar = () => {

    return(
        <nav>

            <img src="/logo.svg" alt="" />
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}