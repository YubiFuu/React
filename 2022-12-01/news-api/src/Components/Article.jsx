import { Link } from "react-router-dom";

const Article = (props, index) => {
    return (
        <article>
            <img src={props.urlToImage} alt="" />
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>{props.puplishedAt}</p>
            <Link to={`/article/${index}`}>Read more</Link>
        </article>
    );
};

export default Article;
