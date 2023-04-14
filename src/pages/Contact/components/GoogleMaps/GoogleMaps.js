import React, {useEffect, useState} from "react";
import {GoogleMap, LoadScript} from '@react-google-maps/api'
import ServiceArea from "./ServiceArea";
import './GoogleMaps.css'
import axios from "axios";

function GoogleMaps() {
    const [googleMapsApiKey, setGoogleMapsApiKey] = useState('');

    useEffect(()=>{
        axios.get('/api/contact/map').then(res => setGoogleMapsApiKey(res.data))
    }, []);

    if (googleMapsApiKey.length === 0) {
        return <></>
    }
    const center = {lat: 30.379269, lng: -97.737706};

    const options = {
        streetViewControl: false,
        fullscreenControl: false,
        gestureHandling: 'greedy',
        clickableIcons: false
    };

    return <div className={'GoogleMaps'}>
        <h2>Service Area</h2>
        <LoadScript
            googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
                mapContainerClassName={'MapContainer'}
                center={center}
                zoom={9}
                options={options}
            >
                <ServiceArea/>
            </GoogleMap>
        </LoadScript>
    </div>

}

export default GoogleMaps