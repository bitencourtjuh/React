import { NavLink } from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
  return (
    <div id="navbar">
        <h2>Party Time</h2>
        <ul>
            <li>
                <NavLink to="/">Minhas Festas</NavLink>
            </li>
            <li>
                <NavLink to="/party/new" className="btn">Criar Festas</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
