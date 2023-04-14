import {NavLink} from "react-router-dom";
import './NavigationBar.css'
const NavigationBar = ({links}) => {

    return <nav className='NavigationBar'>
        {links.map((link, index) =>
            <NavLink key={index} to={link.to} className={({isActive}) => isActive ? 'active' : ''}>
                {link.name}
            </NavLink>)}
    </nav>
};
export default NavigationBar;