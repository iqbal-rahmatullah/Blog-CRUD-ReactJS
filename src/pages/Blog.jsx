import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Navigations from "../components/Navigations";
import "./Blog.css";

function Blog() {
  const [dataBlog, setDataBlog] = useState([{}]);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fectdata = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        "https://bootcamp.smafg.sch.id/api/exercises/posts"
      );
      setDataBlog(data.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://bootcamp.smafg.sch.id/api/exercises/posts/${id}`
      );

      alert(data.message);
      setDeleteStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fectdata();

    return () => setDeleteStatus(false);
  }, [deleteStatus]);

  return (
    <div>
      <Navigations />
      <div className='header'>
        <h1>Welcome To My Blog</h1>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        dataBlog.map((blog) => (
          <div className='blog-wrapper' key={blog.id}>
            <div className='blog_title'>
              <h2>{blog.title}</h2>
              <span className='post_type'>{blog.post_type}</span>
            </div>
            <span className='blog_descrription'>{blog.description}</span>
            <p>{blog.content}</p>
            <Link to={`/detail_blog/${blog.id}`}>Lihat selengkapnya</Link>
            <div className='btn-content'>
              <button
                onClick={() => navigate(`edit_blog/${blog.id}`)}
                className='btn-edit'>
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog.id)}
                className='btn-delete'>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Blog;
