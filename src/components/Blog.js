// src/pages/Blog.js
import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    title: "How to Protect Your Website from Plagiarism?",
    image: "/images/plagiarism1.png", // Add your local image or public URL
    excerpt:
      "The internet is the biggest platform that provides comprehensive information related to every...",
  },
  {
    title: "How to Avoid Curse of Plagiarism in Writing?",
    image: "/images/plagiarism2.png",
    excerpt:
      "Content duplication means stolen someone else’s work and passing it off as your own...",
  },
];

const Blog = () => {
  return (
    <div className="blog-wrapper">
      <div className="blog-left">
        <h1>Read Our Blogs to Enrich Your Knowledge</h1>
        <p>
          Our blog is more than just content – it’s a space to share insights, trends, and
          updates about writing, plagiarism, and digital creativity. Stay ahead, stay original!
        </p>
        <button className="blog-btn">Click here for more</button>
      </div>

      <div className="blog-right">
        {blogPosts.map((post, idx) => (
          <div className="blog-card" key={idx}>
            <img src={post.image} alt="blog" className="blog-img" />
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
