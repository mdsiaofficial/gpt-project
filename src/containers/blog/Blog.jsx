import React from 'react';
import "./blog.css";
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
const Blog = () => {
  return (
    <div>
      <div className="gpt_blog section_padding" id='blog'>
        <div className="blog_heading">
          <h1 className="title_text">
            A lot is happening, We are blogging about it.
          </h1>
        </div>

        <div className="blog_container">
          <div className="blog_container_A">
            <Article imgURL={blog01} date="Oct 9, 2024" title="Title 1"/>
          </div>
          <div className="blog_container_B">
            <Article imgURL={blog02} date="Oct 9, 2024" title="Title 1"/>
            <Article imgURL={blog03} date="Oct 9, 2024" title="Title 1"/>
            <Article imgURL={blog04} date="Oct 9, 2024" title="Title 1"/>
            <Article imgURL={blog05} date="Oct 9, 2024" title="Title 1"/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
