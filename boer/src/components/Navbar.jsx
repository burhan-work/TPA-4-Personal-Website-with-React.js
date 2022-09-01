import{Link, NavLink} from 'react-router-dom';
import Logo from '../images/lollipop.png'
import {links} from '../data';
import {GoThreeBars} from 'react-icons/go'
import './navbar.css';


const Navbar = () => {
  return (
    <div className="container nav__container">

        {/* logo */}
        <Link to="/" className='logo'>
            <img src={Logo} alt="Nav Logo" />
        </Link>

        {/* nav links */}
        <ul className='nav__links'>
            {
                links.map(({name, path}, index) => {
                    return (
                        <li>
                            <NavLink to={path}>{name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
                
        {/* nav buttons */}
        <button className="nav__toggle-btn">
            <GoThreeBars/>
        </button>
    </div>
  )
}

export default Navbar