import "./AppMovies.css";

const AppMovies = (props) => {
    return (
        <article>
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <div>
                {props.genre.map((element, index) => (
                    <p key={props.title + index}> {element} </p>
                ))}
            </div>
        </article>
    );
};

export default AppMovies;
