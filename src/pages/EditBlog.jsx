import React, { useEffect } from "react";
import Navigations from "../components/Navigations";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Blog.css";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog() {
  const navigate = useNavigate();
  const { blog_id } = useParams();

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    setTouched,
    setValues,
  } = useFormik({
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
        .put(
          `https://bootcamp.smafg.sch.id/api/exercises/posts/${blog_id}`,
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

  const fectdata = () => {
    axios
      .get("https://bootcamp.smafg.sch.id/api/exercises/posts")
      .then((res) => {
        const result = res.data.data.find((a) => a.id === blog_id);
        setValues({
          title: result.title,
          content: result.content,
        });
        setTouched({
          title: true,
          content: true,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fectdata();
  }, []);

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
        <button type='submit' className='update_btn'>
          Update Blog
        </button>
      </form>
    </div>
  );
}

export default EditBlog;
