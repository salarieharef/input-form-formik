import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

const FileInput = () => {
  const [Img, setImg] = useState(null);

  const handleSimple = (e) => {
    setImg(e.target.files[0]);
  };

  const handleFormik = (values) => {
    setImg(values.img);
  };
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          {/* simple input */}
          <div className="bg-gray-200 p-4">
            <h2>simple input</h2>
            <input type="file" onChange={handleSimple} />
          </div>

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
        </div>

        <div className="w-1/2">
          {Img && <img src={URL.createObjectURL(Img)} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default FileInput;
