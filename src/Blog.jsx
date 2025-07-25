import React, { useState } from 'react';
import './Blog.css';
import marriageImg from './assets/shaadhi.png';
import dummyImg from './assets/marriage.webp'; // Add a placeholder image

const blogsData = {
  'shaadi-clone': {
    title: 'Shaadi.com Clone Development',
    image: marriageImg,
    content: (
      <>
        <p>
          The Shaadi.com Clone is a feature-rich and intuitive matrimonial platform that empowers users to find their perfect match with ease. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, alias placeat! Officiis perspiciatis amet eos eveniet tempora cumque earum, consequatur adipisci, cum, consequuntur accusamus natus laboriosam atque totam minus ipsum et soluta.
        </p>
      </>
    ),
  },
  'jeevansathi-clone': {
    title: 'Jeevansathi Clone App',
    image: dummyImg,
    content: (
      <>
        <p>This is a dummy description for the Jeevansathi Clone App
        </p>
      </>
    ),
  },
  'astrotalk-clone': {
    title: 'Astrotalk Clone App',
    image: dummyImg,
    content: (
      <>
        <p>This is a dummy description for the Astrotalk Clone App.</p>
      </>
    ),
  },
  'paytm-clone': {
    title: 'Paytm Clone App Development',
    image: dummyImg,
    content: (
      <>
        <p>This is a dummy description for the Paytm Clone App Development.</p>
      </>
    ),
  },
  'gojek-clone': {
    title: 'Gojek Clone Solutions',
    image: dummyImg,
    content: (
      <>
        <p>This is a dummy description for the Gojek Clone Solutions.</p>
      </>
    ),
  },
};

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState('shaadi-clone');

  return (
    <div className="blog-container">
      <article className="main-blog">
        <h1 className="blog-title">{blogsData[selectedBlog].title}</h1>
        <img src={blogsData[selectedBlog].image} alt={blogsData[selectedBlog].title} />
        <div className="blog-content">{blogsData[selectedBlog].content}</div>
      </article>
      <footer className="blog-footer">
        <h2>More Blogs</h2>
        <ul className="additional-blogs">
          {Object.keys(blogsData).map((key) => (
            <li key={key}>
              <button onClick={() => setSelectedBlog(key)}>{blogsData[key].title}</button>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Blog;