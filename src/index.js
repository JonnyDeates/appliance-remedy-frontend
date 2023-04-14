import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {ParallaxProvider} from "react-scroll-parallax";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Services";
import Wallpaper from "./components/Wallpaper/Wallpaper";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Page404 from "./pages/Page404/Page404";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import "./assets/index.css"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Wallpaper/>} errorElement={<Wallpaper><Page404/></Wallpaper>}>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="services" element={<Service/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
        </Route>
    ));


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ParallaxProvider>
        <RouterProvider router={router}/>
    </ParallaxProvider>
);
