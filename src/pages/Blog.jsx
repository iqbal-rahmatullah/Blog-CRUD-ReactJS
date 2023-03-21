import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigations from "../components/Navigations";
import "./Blog.css";

function Blog() {
  const [dataBlog, setDataBlog] = useState([{}]);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const navigate = useNavigate();

  const fectdata = () => {
    axios
      .get("https://bootcamp.smafg.sch.id/api/exercises/posts")
      .then((res) => setDataBlog(res.data.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://bootcamp.smafg.sch.id/api/exercises/posts/${id}`)
      .then((res) => {
        alert(res.data.message);
        setDeleteStatus(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fectdata();

    return () => setDeleteStatus(false);
  }, [deleteStatus]);

  console.log(dataBlog);
  return (
    <div>
      <Navigations />
      <div className='header'>
        <h1>Welcome To My Blog</h1>
      </div>
      {dataBlog.map((blog) => (
        <div className='blog-wrapper' key={blog.id}>
          <h3>{blog.title}</h3>
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
      ))}
    </div>
  );
}

export default Blog;
