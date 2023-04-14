import './HamburgerMenu.css'

const HamburgerMenu = ({isActive, setIsActive}) => {

    const handleOnClick = () => setIsActive(!isActive)

    return <div className={`HamburgerMenu${isActive ?' is-active' : ''}`} onClick={handleOnClick}>
            <span className="line yeet"/>
            <span className="line"/>
            <span className="line"/>
        <span className='tomato yeet'/>
    </div>;
}
export default HamburgerMenu;