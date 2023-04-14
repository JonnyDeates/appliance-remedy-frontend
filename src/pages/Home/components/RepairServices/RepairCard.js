import React from "react";
import {Link} from "react-router-dom";


const RepairCard = ({heading, imageSrc}) => {
    return <div className={'RepairCards'}>
        <Link to='/services'>
        <img src={imageSrc} alt={heading}/>
        </Link>
        <h2>{heading}s</h2>
    </div>
}

export default RepairCard;