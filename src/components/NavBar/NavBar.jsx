import { Link } from "react-router-dom"
import './navBar.sass'

export const NavBar = () => {

    return(
        <nav>

            <img src="/logo.svg" alt="" />
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Quienes Somos">Nosotros</Link></li>
                <li><Link to="/contacto">contacto</Link></li>
                <div></div>
            </ul>
        </nav>
    )
}