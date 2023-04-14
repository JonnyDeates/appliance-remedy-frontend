import phone from './assets/phone.svg'
import './assets/PhoneButton.css'
const PhoneButton = ({phoneNumber}) => {
    return <a className={'PhoneButton'} href={`tel: ${phoneNumber}`}>
        <img src={phone} alt={`Call us at ${phoneNumber}`}/>
    </a>
};
export default PhoneButton;