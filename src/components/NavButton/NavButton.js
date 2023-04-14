import './NavButton.css'
import {useNavigate} from "react-router-dom";

const NavButton = ({children, to = "/", type = 'button'}) => {
    const navigate = useNavigate();

    const handleClick = () => navigate(to);

    return <button type={type} className={'NavButton'} onClick={handleClick}>{children}</button>
};
export default NavButton;