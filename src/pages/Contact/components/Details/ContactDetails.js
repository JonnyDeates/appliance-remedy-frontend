import './ContactDetails.css'
import {BusinessHours, email, telephone} from "../../../../assets/Info";


const ContactDetails = () => {

    return <div className='ContactDetails'>
        <h2>Appliance Remedy LLC</h2>
        <p>{telephone}</p>
        <p>{email}</p>
        <BusinessHours/>
    </div>
};
export default ContactDetails;