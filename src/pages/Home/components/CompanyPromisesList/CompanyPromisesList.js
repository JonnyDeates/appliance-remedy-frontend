import React from "react";
import './Why-Choose.css'
import NavButton from "../../../../components/NavButton/NavButton";

const CompanyPromiseList = () => {
    return <div className='Why-Choose'>
        <div>
            <h1>Why choose us?</h1>
            <ul>
                <li>Expertise You Can Rely On</li>
                <li>High-Quality Parts and Techniques</li>
                <li>Comprehensive Guarantee</li>
            </ul>
            <NavButton to='/contact'>SCHEDULE TODAY!</NavButton>
        </div>

    </div>


};
export default CompanyPromiseList;