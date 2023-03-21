import React from "react";
import Navigations from "../components/Navigations";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Blog.css";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const navigate = useNavigate();

  const { values, touched, errors, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        title: "",
        content: "",
      },
      validationSchema: yup.object().shape({
        title: yup.string().required().min(5),
        content: yup.string().required().min(100),
      }),
      onSubmit: (values) => {
        axios
          .post(
            "https://bootcamp.smafg.sch.id/api/exercises/posts",
            {
              title: values.title,
              content: values.content,
              isPrivate: false,
              postType: "education",
            },
            { headers: { "Content-Type": "application/json" } }
          )
          .then((res) => {
            alert(res.data.message);
            navigate("/");
          })
          .catch((err) => console.log(err));
      },
    });

  return (
    <div>
      <Navigations />
      <form onSubmit={handleSubmit} className='form_add'>
        <div className='form-input'>
          <label>Title </label>
          <input
            type='text'
            id='title'
            name='title'
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.title && touched.title ? "error" : ""}
          />
          {touched.title && errors.title ? (
            <p className='errortext'>{errors.title}</p>
          ) : (
            ""
          )}
        </div>
        <div className='form-input'>
          <label>Content </label>
          <textarea
            name='content'
            id='content'
            value={values.content}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              touched.content && errors.content ? "error" : ""
            }></textarea>
          {touched.content && errors.content ? (
            <p className='errortext'>{errors.content}</p>
          ) : (
            ""
          )}
        </div>
        <button type='submit' className='add_btn'>
          Add Blog
        </button>
      </form>
    </div>
  );
}

export default AddBlog;
