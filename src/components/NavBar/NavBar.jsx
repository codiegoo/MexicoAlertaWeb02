import { Link } from "react-scroll"
import './navBar.sass'

export const NavBar = () => {

    return(
        <nav>

            <img src="/logo.svg" alt="" />
            <ul>
                <li><Link to="carouselExampleInterval" smooth={true} duration={500}>Inicio</Link></li>
                <li><Link to="Nosotros" smooth={true} duration={500}>Nosotros</Link></li>
                <li><Link to="Contacto" smooth={true} duration={500}>contacto</Link></li>
            </ul>
        </nav>
    )
}