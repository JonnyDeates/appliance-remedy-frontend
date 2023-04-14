import React from "react";
import OurGoalsPic from "../../assets/ourgoals.jpg";
import "./OurGoals.css";
import Image from "../../../../components/Image/Image";

const OurGoals = () => {
    return <div className='OurGoals'>
        <div className='Text'>
            <h1>Our Goals</h1>
            <ul>
                <li>To provide cutting edge solutions to all your appliance repair problems.</li>
                <li>We do not believe in recommending unnecessary repairs.</li>
                <li>We always strive hard to give our 110% and ensure complete customer satisfaction.</li>
                <li>Our aim is to provide consistent services to our customers and carve a niche with our honest and
                    good work.
                </li>
                <li>We are here to build trustworthy relationships with our customers, and treat customers with
                    respect.
                </li>
            </ul>
        </div>
        <Image src={OurGoalsPic} alt='Our Goals'/>
    </div>
};

export default OurGoals;