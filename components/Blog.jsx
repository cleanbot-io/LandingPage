'use client'
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@keltheceo");
        const data = await response.json();
        const items = data.items || [];
        setBlogPosts(items);


      } catch (error) {
        console.log("Error fetching blog posts", error);
      } 
    };

    fetchBlogs();
  }, []);

  //for each item in the json data, a new BlogPost object is created
  return (
    <div className="grid grid-cols-2 text-white m-10">
      {blogPosts.map((item, index) => (
        <BlogPost key={index} {...item} index={index}/>
      ))}
    </div>


  );
};


//each BlogPost object is being set here from json data (title of blog, link of blog)
const BlogPost = ({ title, link }) => (
  <div className="flex justify-center items-center p-2 bg-gray-900 rounded-md m-10 w-30">
    <a href={link} target="_blank" className="flex flex-col items-center">
      <img src="/cb3d.png" className="mb-8 h-60" alt="Blog Post Image" />
      <p className="text-center text-white">
        {title}
      </p>
    </a>
  </div>
);


  export default Blogs;