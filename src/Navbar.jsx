import { NavLink } from 'react-router-dom'

function Navbar() {

  const activeStyle = ({ isActive }) => ({
    color: isActive ? 'red' : 'black',
  });
  
  return (
    <div>
        <NavLink
            to="/"
            style={activeStyle}
            >
         דף הבית |  
        </NavLink>

        <NavLink 
            to="/about"
            style={activeStyle}
            >
            אודות האתר |
        </NavLink>

        <NavLink
            to="/characters"
            style={activeStyle}
            >
            דמויות
        </NavLink>
    </div>
  )
}

export default Navbar
