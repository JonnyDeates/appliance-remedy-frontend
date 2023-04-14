import austin from './assets/austin-1.jpg'
import austin2 from './assets/austin-2.jpg'
import austin3 from './assets/austin-3.jpg'
import austin4 from './assets/austin-4.jpg'
import austin5 from './assets/austin-5.jpg'
import {ParallaxBanner} from "react-scroll-parallax";
import {useEffect, useState} from "react";
import './assets/LandingPageIntroVideo.css'
import NavButton from "../../../../components/NavButton/NavButton";

const LandingPageIntroVideo = () => {
    const speed = -15;
    const images = [austin, austin2, austin3, austin4, austin5];

    const [index, setIndex] = useState(0);


    useEffect(() => {
        const imagesInterval = setInterval(() => {
            setIndex((index) => {
                if (index < images.length - 1) {
                    return index + 1;
                }
                return 0;
            });
        }, 15000);
        return () => clearInterval(imagesInterval);
    }, [images.length]);


    return <ParallaxBanner className={"Video"} layers={[{image: images[index], speed}]}>
        <div className={'ButtonWrapper'}>
            <NavButton to='/contact'>SCHEDULE ONLINE</NavButton>
        </div>
    </ParallaxBanner>
};
export default LandingPageIntroVideo;