import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <NavLink
            to="/"
            style={({isActive})=>({color:isActive?'red':'black'})}
            >
         דף הבית |  
        </NavLink>

        <NavLink 
            to="/about"
            style={({isActive})=>({color:isActive?'red':'black'})}
            >
            אודות האתר |
        </NavLink>

        <NavLink
            to="/characters"
            style={({isActive})=>({color:isActive?'red':'black'})}
            >
            דמויות
        </NavLink>
    </div>
  )
}

export default Navbar