import kitchen from "./assets/kitchen.jpg"
import useIsMobile from "../../../../utils/useIsMobile/useIsMobile";
import NavButton from "../../../../components/NavButton/NavButton";
import './assets/AboutUsHomePage.css';
import Text from "../../../../components/Text/Text";

const AboutUsHomePage = () => {
    const isMobile = useIsMobile();


    return <div className={'AboutUsHomePage'}>
        <div className={'Content'}>
            <Text heading={'Appliance Remedy LLC'}
                  paragraph={'Professional appliance service backed by 10 years of experience with\n' +
                      '                all major and speciality brands across the board. Quick and seamless service done right with low\n' +
                      '                estimates and\n' +
                      '                efficient labour rates. All repairs warrantied for 90 days, labour and parts. Appliance Remedy is the\n' +
                      '                one stop\n' +
                      '                solution for any appliance issues, big or small, exceptional service at a considerable price point.'}/>
            <div className={'ButtonGroup'}>
                <NavButton to={'/about'}>Learn More</NavButton>
                <NavButton to='/contact'>Schedule Now</NavButton>
            </div>
        </div>
        {!isMobile &&
            <div className={'Picture'}>
                <img src={kitchen} alt={'kitchen'}/>
            </div>}
    </div>
}
export default AboutUsHomePage;