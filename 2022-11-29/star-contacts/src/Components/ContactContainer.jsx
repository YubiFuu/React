import "./ContactContainer.css";
const ContactContainer = (props) => {
    return (
        <div className="container">
            <img src={props.pictureUrl} />
            <p>{props.name}</p>
            <p>{Math.round(props.popularity * 100) / 100}</p>
        </div>
    );
};

export default ContactContainer;
