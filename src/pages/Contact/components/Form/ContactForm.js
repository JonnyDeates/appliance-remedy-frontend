import React, {useReducer, useState} from "react";
import EmailValidator from 'email-validator'
import './ContactForm.css'
import Button from "../../../../components/Button/Button";
import axios from "axios";
import capitalizeAndSplit from "../../../../utils/capitalize/capitalizeAndSplit";
import Modal from "./Modal/Modal";

const serviceReducer = (state, action) => {
    if(action === 'reset'){
        const newState = {};
        Object.keys(state).forEach(key => Object.assign(newState, {[key]: false}));
        return {...newState}
    }
    return {...state, [action]: !state[action]}
};

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [additionalDetails, setAdditionalDetails] = useState('');
    const [error, setError] = useState('');
    const [serviceCheckList, setServiceCheckList] = useReducer(serviceReducer, {
        fridge: false,
        oven: false,
        washer: false,
        dryer: false,
        dish_washer: false
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPrivacyPolicyShown, setIsPrivacyPolicyShown] = useState(false);
    const services = Object.keys(serviceCheckList);



    const handleName = (event) => setName(event.target.value);
    const handleEmail = (event) => setEmail(event.target.value);
    const handlePhoneNumber = (event) => setPhoneNumber(event.target.value);
    const handleAdditionalDetails = (event) => setAdditionalDetails(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim().length === 0) {
            setError("Name wasn't entered")
        } else if (email.trim().length === 0) {
            setError("Email wasn't entered")
        } else if (phoneNumber.trim().length === 0) {
            setError("Phone Number wasn't entered")
        } else {
            const servicesChecked = Object.keys(serviceCheckList).filter(obj => serviceCheckList[obj]);

            if (servicesChecked.length === 0) {
                setError("Please mark a type of repair")
            } else if (!EmailValidator.validate(email)) {
                setError('Email is not valid')
            } else {
                setError("")
                setIsSubmitted(true);
                axios.post('https://sheets.googleapis.com/', {name, email, phoneNumber, servicesChecked, additionalDetails})
                    .then(r => setIsSubmitted(true))
                    .catch(e => setError(e));
            }
        }
    };

    if(isSubmitted){
        const resetAll = () => {
            setEmail('');
            setName('');
            setAdditionalDetails('');
            setPhoneNumber('');
            setServiceCheckList('reset');
            setIsSubmitted(false);
        }
        return <form className={'ContactForm Submitted'} onSubmit={resetAll}>
            <h2> We will get back to you shortly.</h2>
            <Button type='submit'>Submit Another Request?</Button>
        </form>
    }

    return <form className={'ContactForm'} onSubmit={handleSubmit}>
        <h2>Need A Repair?</h2>
        <input required placeholder={'Full Name'} value={name} onChange={handleName}/>
        <input required placeholder={'Email'} value={email} onChange={handleEmail}/>
        <input required placeholder={'Phone Number'} type={'tel'} value={phoneNumber} onChange={handlePhoneNumber}/>
        <h3> Services Requested:</h3>
        <div className={'ServicesList'}>
            {services.map((serviceKey) => <div key={serviceKey}>
                <input type='checkbox' name={serviceKey} checked={serviceCheckList[serviceKey]}
                       onChange={() => setServiceCheckList(serviceKey)}/>
                <label htmlFor={serviceKey}
                       onClick={() => setServiceCheckList(serviceKey)}>{capitalizeAndSplit(serviceKey)} Repair</label>

            </div>)}
        </div>
        <textarea placeholder={'Additional Details: appliance problems, brand of appliance, etc.'}
                  value={additionalDetails} onChange={handleAdditionalDetails}/>
        {error.length > 0 && <h3 className={'Error'}>{error}</h3>}
        <p>By submitting this request you agree to the <span onClick={()=> setIsPrivacyPolicyShown(true)}>Privacy Policy</span></p>
        <Button type={'submit'}>Submit Request</Button>
        <Modal closeModal={() => setIsPrivacyPolicyShown(false)} isShown={isPrivacyPolicyShown}/>
    </form>
}
export default ContactForm;