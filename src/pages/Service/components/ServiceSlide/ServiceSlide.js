import React from "react";


const ServiceSlide = ({heading, imageSrc, paragraph, isFlipped = false}) => {

    const Image = () => <img src={imageSrc} alt={heading}/>;

    return <div className='ServiceSlide'>
        {isFlipped && <Image/>}
        <div>
            <h3>{heading}</h3>
            <p>{paragraph}</p>
        </div>
        {!isFlipped && <Image/>}
    </div>
}

export default ServiceSlide;