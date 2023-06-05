import React from "react";

function Card(props) {
  const { article } = props;
  return (
    <div className="card">
      <img
        src={article.urlToImage}
        className="card-img"
        alt="News Image Thumbnail"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        {article.description ? (
          <p className="card-text">{`${article.description.substring(
            0,
            100
          )}...`}</p>
        ) : (
          ""
        )}

        <a href={article.url} className="card-link">
          Read More...
        </a>
      </div>
    </div>
  );
}

export default Card;
