import React from 'react';
import "./blog.css";
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
const Blog = () => {
  return (
    <div>
      <div className="gpt_blog" id='blog'>

        <div className="gpt_blog_heading">
          <h1 className="title_text">
            A lot is happening, We are blogging about it.
          </h1>
        </div>

        <div className="gpt_blog_container">
          <div className="blog_group_a">
            <Article imgURL={blog01} />
          </div>

          <div className="blog_group_b">
            <Article imgURL={blog02} />
            <Article imgURL={blog03} />
            <Article imgURL={blog04} />
            <Article imgURL={blog05} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blog
