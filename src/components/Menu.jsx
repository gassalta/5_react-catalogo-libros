import { Link } from "react-router-dom";

const Menu = () => (
    <nav className="menu">
        <ul>
            <li className="menu-item">
            <Link to="/">Catálogo de Libros</Link>
            </li>
            <li className="menu-item">
            <Link to="/acerca-de">Acerca de </Link>
            </li>
        </ul>        
    </nav>
);

export default Menu;