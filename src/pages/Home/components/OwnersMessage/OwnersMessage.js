import React from "react"
import OwnerPic from "./assets/Ownerpic.webp";
import abstractAcute from "./assets/abstract-acute-angle.png";
import "./assets/OwnersMessge.css"
import Image from "../../../../components/Image/Image";
import Text from "../../../../components/Text/Text";

const OwnersMessage = () => {


    return <div className={'Owners-Message'} style={{backgroundImage: `url(${abstractAcute})`}}>
        <div className='Content'>
            <h4>message from</h4>
            <Text heading={'The Owner'}
                  paragraph={'"We pride ourselves on providing quick and efficient service for all of your appliance\n' +
                      '                needs.\n' +
                      '                Whether you have a refrigerator that\'s not cooling or a dishwasher that\'s leaking, our experienced\n' +
                      '                technicians can diagnose and fix the problem in no time.\n' +
                      '                We understand that your appliances are an important part of your daily routine, and we work hard to get\n' +
                      '                them up and running\n' +
                      '                as soon as possible. Trust us to get the job done right, and get your appliances back in working order\n' +
                      '                quickly and efficiently."'}/>
        </div>
        <Image src={OwnerPic} alt='Owner'/>
    </div>
}
export default OwnersMessage;