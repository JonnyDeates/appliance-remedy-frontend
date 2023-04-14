import React from "react";
import './assets/Services.css'
import CanonicalTag from "../../components/CanonicalTag/CanonicalTag";
import TypesOfMachines from "./components/TypesOfMachines/TypesOfMachines";
import BrandsWeService from "./components/BrandsWeService/BrandsWeService";

const  ServiceContent = () => {
    return <main className="Services">
        <CanonicalTag pathname='/services'/>
        <TypesOfMachines/>
        <BrandsWeService />
    </main>
};

export default ServiceContent;