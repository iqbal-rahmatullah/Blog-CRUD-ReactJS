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
      postType: yup.string().required(),
      description: yup.string().required().min(10),
    }),
    onSubmit: async (values) => {
      try {
        const { data } = await axios.put(
          `https://bootcamp.smafg.sch.id/api/exercises/posts/${blog_id}`,
          {
            title: values.title,
            content: values.content,
            isPrivate: false,
            postType: values.postType,
            description: values.description,
          },
          { headers: { "Content-Type": "application/json" } }
        );
        alert(data.message);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const fectdata = async () => {
    try {
      const { data } = await axios.get(
        "https://bootcamp.smafg.sch.id/api/exercises/posts"
      );
      const result = data.data.find((a) => a.id === blog_id);
      setValues({
        title: result.title,
        content: result.content,
        postType: result.post_type,
        description: result.description,
      });
      setTouched({
        title: true,
        content: true,
      });
    } catch (error) {
      console.log(error);
    }
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
          <label>Post Type </label>
          <select
            name='postType'
            id='post_type'
            value={values.postType}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.postType && touched.postType ? "error" : ""}>
            <option value=''>----</option>
            <option value='entertainment'>entertainment</option>
            <option value='bussiness'>bussiness</option>
            <option value='education'>education</option>
          </select>
          {touched.postType && errors.postType ? (
            <p className='errortext'>{errors.postType}</p>
          ) : (
            ""
          )}
        </div>

        <div className='form-input'>
          <label>Description</label>
          <input
            type='text'
            id='description'
            name='description'
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.description && touched.description ? "error" : ""}
          />
          {touched.description && errors.description ? (
            <p className='errortext'>{errors.description}</p>
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
