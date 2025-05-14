import { Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";

const FileInput = () => {
  const [Img, setImg] = useState(null);


  const handleFormik = (values) => {
    setImg(values.img);
  };

  const formik = useFormik({
    initialValues: {
      img: null,
    },
    onSubmit: (values) => {
      setImg(values.img);
    },
  });
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">


          {/* formik */}
          <div className="bg-gray-200 mt-10">
            <h2>formik</h2>
            <Formik initialValues={{ img: null }} onSubmit={handleFormik}>
              {({ values, handleSubmit, handleChange, setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    name="img"
                    type="file"
                    onChange={(e) => {
                      setFieldValue("img", e.target.files[0]);
                    }}
                  />
                  <button
                    type="submit"
                    className="bg-blue-400 w-fit mx-auto p-2"
                  >
                    click
                  </button>
                </form>
              )}
            </Formik>
          </div>

          {/* formik with useFormik */}
          <div className="bg-gray-200 mt-10">
            <h2>formik with useFormik</h2>
      
                <form onSubmit={formik.handleSubmit}>
                  <input
                    name="img"
                    type="file"
                    onChange={(e) => {
                      formik.setFieldValue("img", e.target.files[0]);
                    }}
                  />
                  <button
                    type="submit"
                    className="bg-blue-400 w-fit mx-auto p-2"
                  >
                    click
                  </button>
                </form>
       
          </div>
        </div>

        <div className="w-1/2">
          {Img && <img src={URL.createObjectURL(Img)} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default FileInput;
