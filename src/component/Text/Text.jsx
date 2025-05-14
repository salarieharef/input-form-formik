import { Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";

const Text = () => {
  const [FormValue, setFormValue] = useState([]);

  const handleFormik = (values) => {
    const title = values.title;
    const desc = values.desc;
    setFormValue([...FormValue, { title, desc }]);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
    },

    onSubmit: (values) => {
      const title = values.title;
      const desc = values.desc;
      setFormValue([...FormValue, { title, desc }]);
    },
  });
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          {/* Formik with its own Form and Field */}
          <div className="bg-gray-200 mt-10 p-6">
            <h1>Formik with its own Form anf Field</h1>

            <div className="mx-5 flex gap-5 border-2">
              <Formik
                initialValues={{ title: "", desc: "" }}
                onSubmit={handleFormik}
                className="border-2 "
              >
                <Form className="flex gap-5">
                  <Field type="text" name="title" placeholder="title" />
                  <Field type="text" name="desc" placeholder="desc" />
                  <button
                    type="submit"
                    className="bg-blue-400 w-fit mx-auto p-2"
                  >
                    click
                  </button>
                </Form>
              </Formik>
            </div>
          </div>

          {/* Formik with other form and input */}
          <div className="bg-gray-200 mt-10 p-6">
            <h1>Formik with other form and input</h1>

            <div className="mx-5 flex gap-5 border-2">
              <Formik
                initialValues={{ title: "", desc: "" }}
                onSubmit={handleFormik}
                className="border-2 flex flex-col w-1/3"
              >
                {({ values, handleSubmit, handleChange, setFieldValue }) => (
                  <form onSubmit={handleSubmit} className="flex gap-5">
                    <input
                      type="text"
                      name="title"
                      value={values.cost}
                      onChange={handleChange}
                      placeholder="title"
                      className="input input-bordered w-full "
                    />
                    <input
                      type="text"
                      name="desc"
                      value={values.cost}
                      onChange={handleChange}
                      placeholder="desc"
                      className="input input-bordered w-full "
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

          {/* Formik with useFormik */}
          <div className="bg-gray-200 mt-10 p-6">
            <h1>Formik with useFormik</h1>

            <div className="mx-5 flex gap-5 border-2">
              <form onSubmit={formik.handleSubmit} className="flex gap-5">
                <input
                  type="text"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  placeholder="title"
                  className="input input-bordered w-full "
                />
                <input
                  type="text"
                  name="desc"
                  value={formik.values.desc}
                  onChange={formik.handleChange}
                  placeholder="desc"
                  className="input input-bordered w-full "
                />
                <button type="submit" className="bg-blue-400 w-fit mx-auto p-2">
                  click
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="w-1/2 mt-10 border-2">
          <div className="  flex flex-wrap justify-around gap-5">
            {FormValue?.map((item, index) => {
              return (
                <div key={index} className=" bg-gray-200 w-[30%] h-20">
                  <h1>title : {item.title}</h1>
                  <h3>desc : {item.desc}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
