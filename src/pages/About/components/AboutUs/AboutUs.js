import React from "react";
import AboutUsPic from "../../assets/aboutus.jpg";
import abstractAcute from "../../../../pages/Home/components/OwnersMessage/assets/abstract-acute-angle.png";
import Image from '../../../../components/Image/Image';
import Text from  '../../../../components/Text/Text';
import "./AboutUs.css";

const AboutUs = () => {
    return <div className={'AboutUs'} style={{backgroundImage: `url(${abstractAcute})`}}>
            <Text heading={'ABOUT US'} paragraph={'At Appliance Remedy, our team of expert technicians is dedicated to providing\n' +
                '                exceptional service that prioritizes your needs above all else.\n' +
                '                We understand that having a malfunctioning appliance can be stressful, which is why we make it our\n' +
                '                mission to ensure a smooth, hassle-free experience every time.\n' +
                '                You can count on us to always be upfront and transparent, and we never recommend unnecessary repairs or\n' +
                '                cut corners to save a quick buck.\n' +
                '                Our focus is solely on your complete satisfaction, and we are committed to going the extra mile to\n' +
                '                achieve it. We believe that by building a strong reputation for reliable, consistent service, we can\n' +
                '                create a long-term partnership that benefits both you and our business.\n' +
                '                Rest assured that when you choose Appliance Remedy, you\'re choosing a trustworthy, customer-focused\n' +
                '                local company that always puts you first.'} />
        <Image src={AboutUsPic} alt={'Kitchen'}/>
    </div>
};

export default AboutUs;