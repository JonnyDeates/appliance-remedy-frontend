import React from "react";
import PrinciplesPic from "../../assets/PrinciplesPic.jpg";
import "./OurPrinciples.css";
import Image from "../../../../components/Image/Image";
import Text from "../../../../components/Text/Text";

const OurPrinciples = () => {
    return <div className={'OurPrinciples'}>
        <div>
        <Text heading={'Our Principles'} paragraph={'We prioritize your best interest and won\'t suggest replacing any parts solely for profit. Moreover, our pricing estimates are transparent and do not include any concealed expenses.'} />

        <Text heading={'AROUND-THE-CLOCK SERVICE'} paragraph={'We are always here to help you, because we know appliances don’t stop functioning between 9 am and 5 pm.\n' +
            '            So, what are you waiting for? Schedule your appliance repair appointment today. Give us a call on (512)-882-1267 today.'}/>
            </div>
        <Image src={PrinciplesPic} alt={'Our Principles'}/>

    </div>
};

export default OurPrinciples;