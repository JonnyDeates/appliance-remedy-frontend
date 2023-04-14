import React from "react";
import "./assets/Header.css"
import logo from "./assets/appliance-remedy.png";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SideNavigation from "./components/SideNavigation/SideNavigation";
import PhoneButton from "./components/PhoneButton/PhoneButton";
import useIsMobile from "../../../../utils/useIsMobile/useIsMobile";
import {useNavigate} from "react-router-dom";
import {telephone} from "../../../../assets/Info";

const Header = () => {
    const links = [{name: 'HOME', to: '/'}, {name: 'ABOUT', to: '/about'},
        {name: 'SERVICES', to: '/services'}, //{name: 'FAQ', to: '/faq'}, // {name: 'REVIEWS', to: '/reviews'},
        {name: 'CONTACT', to: '/contact'}];


    const navigation = useNavigate();
    const isMobile = useIsMobile();

    const handleLogoClick = () => navigation('/');

    return <header className={`Header${isMobile ? ' isMobile' : ''}`}>
        {isMobile && <SideNavigation links={links}/>}
        <div className='Logo'>
            <img src={logo} alt={'Appliance Remedy'} onClick={handleLogoClick}/>
            {!isMobile && <h2>{telephone}</h2>}
        </div>
        {isMobile && <PhoneButton phoneNumber={telephone}/>}
        {!isMobile && <NavigationBar links={links}/>}
    </header>
};
export default Header;