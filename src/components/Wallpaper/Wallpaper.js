import Header from "./components/Header/Header";
import {Outlet} from "react-router-dom";
import React from "react";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import './assets/Wallpaper.css'



const Wallpaper = (props) => {
    return <div className={'Wallpaper'}>
        <ScrollToTop />
        <Header/>
        <Outlet/>
        {props.children}
        <Footer />
    </div>
};
export default Wallpaper