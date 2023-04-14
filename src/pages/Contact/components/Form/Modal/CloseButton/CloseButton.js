import './CloseButton.css'


const CloseButton = ({handleClose}) => {
    return <button onClick={handleClose} className={'CloseButton'}>X</button>
}
export default CloseButton;