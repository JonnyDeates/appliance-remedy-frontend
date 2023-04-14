import React from "react";
import WarrantyImg from "../../assets/warranty.svg";
import "./Warranty.css";

const Warranty = () => {
    return <div className="Warranty">
        <h1>WARRANTY</h1>
        <h3>90 DAY WARRANTY ON PARTS & LABOR</h3>
        <img src={WarrantyImg} alt={'warranty'}/>
    </div>
}

export default Warranty;