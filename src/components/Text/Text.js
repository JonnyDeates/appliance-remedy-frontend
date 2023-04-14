import './Text.css'

const Text = ({heading, paragraph}) => {
    return <div className="Text">
        <h1>{heading}</h1>
        <p>{paragraph}</p>
    </div>
};

export default Text;