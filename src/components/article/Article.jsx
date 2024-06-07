import React from 'react';
import "./article.css";

const Article = (imgURL, date, title) => {
  return (
    <div>
      <div className="blog_article">
        <div className="article_img">
          <img src={imgURL} alt="" />
        </div>


        <div className="article_content">
          <p>{date}</p>
          <h3>{title}</h3>
        </div>

        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
