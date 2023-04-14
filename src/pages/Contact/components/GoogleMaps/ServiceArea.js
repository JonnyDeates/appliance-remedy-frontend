import {Polygon} from "@react-google-maps/api";

const ServiceArea = () => {
    const paths = [{lat: 30.612471, lng: -97.900632}, {lat: 30.661316, lng: -97.723294},
        {lat: 30.651816, lng: -97.586891}, {lat: 30.343514, lng: -97.590842},
        {lat: 30.209481, lng: -97.632078},
        {lat: 30.142558, lng: -97.724414},

        {lat: 30.112057, lng: -97.819038},
        {lat: 30.096146, lng: -97.929568},
        {lat: 30.276544, lng: -97.950340},
        {lat: 30.346292, lng: -98.028778},

        {lat: 30.542835, lng: -98.052425},


        {lat: 30.612471, lng: -97.900632}]


    const options = {
        fillColor: "lightblue",
        fillOpacity: 0.4,
        strokeColor: "red",
        strokeOpacity: 1,
        strokeWeight: 2,
        clickable: false,
        draggable: false,
        editable: false,
        geodesic: false,
        zIndex: 1
    }
    return <Polygon paths={paths} options={options}/>
}
export default ServiceArea;