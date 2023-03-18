import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Form.css";

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().min(20).required(),
  kondisi: yup.string().required(),
});

function Form() {
  const onSubmit = (values, action) => {
    action.resetForm();
  };
  const { values, touched, errors, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        price: 0,
        description: "",
        kondisi: "",
      },
      validationSchema,
      onSubmit,
    });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Nama Product'
          className={errors.name && touched.name ? "erorinput" : ""}
        />
        {errors.name && touched.name ? (
          <p className='errortext'>{errors.name}</p>
        ) : (
          ""
        )}
        <input
          type='number'
          id='price'
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Harga Product'
          className={errors.price && touched.price ? "erorinput" : ""}
        />
        {errors.price && touched.price ? (
          <p className='errortext'>{errors.price}</p>
        ) : (
          ""
        )}
        <input
          type='text'
          id='description'
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Description'
          className={
            errors.description && touched.description ? "erorinput" : ""
          }
        />
        {errors.description && touched.description ? (
          <p className='errortext'>{errors.description}</p>
        ) : (
          ""
        )}
        <select
          name='kondisi'
          id='kondisi'
          value={values.kondisi}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.kondisi && touched.kondisi ? "erorinput" : ""}>
          <option value=''>---</option>
          <option value='baru'>Baru</option>
          <option value='bekas'>Bekas</option>
        </select>
        {errors.kondisi && touched.kondisi ? (
          <p className='errortext'>{errors.kondisi}</p>
        ) : (
          ""
        )}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
