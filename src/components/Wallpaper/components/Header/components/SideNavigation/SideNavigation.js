import {NavLink} from "react-router-dom";
import "./SideNavigation.css"
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import {useState} from "react";

const SideNavigation = ({links}) => {

    const [isExpanded, setIsExpanded] = useState(false);


    const handleCloseExpanded = () => setIsExpanded(false)
    return <>
        <HamburgerMenu isActive={isExpanded} setIsActive={setIsExpanded} />

        {isExpanded && <nav className='SideNavigation'>
            {links.map((link, index) =>
                <NavLink key={index} to={link.to} onClick={handleCloseExpanded} className={({isActive}) => isActive ? 'active' : ''}>
                    {link.name}
                </NavLink>)}
        </nav>}
        {isExpanded && <div className='Backdrop' onClick={handleCloseExpanded}/>}

    </>
};
export default SideNavigation;