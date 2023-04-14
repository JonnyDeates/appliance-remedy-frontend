import NavButton from "../../components/NavButton/NavButton";
import CanonicalTag from "../../components/CanonicalTag/CanonicalTag";
import Policy from "./assets/policy";
import './assets/PrivacyPolicy.css'


const PrivacyPolicy = () => {
    return <main className={'PrivacyPolicy'}>
        <CanonicalTag pathname={'/privacy-policy'}/>
        <h1>Privacy Policy</h1>
        {Object.keys(Policy).map((key, index) => <div key={index}>
            <p className={'PolicyHeader'} >
                <b>{key}</b>
            </p>
            <p>{Policy[key]}</p>
        </div>)}
        <NavButton to='/'>Return to Home</NavButton>
    </main>
}
export default PrivacyPolicy;