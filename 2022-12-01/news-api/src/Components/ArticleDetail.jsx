import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ArticleDetail = () => {
    const [oneArticle, setOneArticle] = useState([]);
    let { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setOneArticle(json));
    }, []);

    console.log(oneArticle);

    let oneArticleDetail = oneArticle.filter((elt) => {
        return elt.id.toString() === id.toString();
    });
    console.log(oneArticleDetail);

    return (
        <div>
            {oneArticleDetail.map((elt, index) => (
                <div key={index}>
                    <h2>
                        {elt.title} - {elt.author}
                    </h2>
                    <img src={elt.urlToImage} />
                    <p>{elt.description}</p>
                </div>
            ))}
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default ArticleDetail;
