import { Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";

const SelectOption = () => {
  const [TechList, setTechList] = useState([]);

  const handleFormik = (values) => {
    setTechList([values.tech]);
  };

  const formik = useFormik({
    initialValues: {
      tech: "",
    },
    onSubmit: (values) => {
      setTechList([values.tech]);
    },
  });
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          {/* Formik with its own Form and Field */}
          <div className="flex mt-10 gap-5 bg-gray-200 p-4  ">
            Formik + own
            <Formik initialValues={{ tech: "" }} onSubmit={handleFormik}>
              <Form className="flex gap-5">
                <Field as="select" name="tech" className="bg-white p-4 px-10">
                  <option value="react">react</option>

                  <option value="next">next</option>

                  <option value="typescript">typescript</option>
                </Field>

                <button type="submit" className="bg-blue-400 w-fit mx-auto p-2">
                  click
                </button>
              </Form>
            </Formik>
          </div>

          {/* Formik with otehr form and input */}
          <div className="flex mt-10 gap-5 bg-gray-200 p-4  ">
            Formik + other
            <Formik initialValues={{ tech: "" }} onSubmit={handleFormik}>
              {({ values, handleChange, handleSubmit, handleBlur }) => (
                <form onSubmit={handleSubmit} className="flex gap-5">
                  <select
                    name="tech"
                    value={values.tech}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                    className="select  max-w-xs"
                  >
                    <option value="" label="Select a tech">
                      Select a tech
                    </option>
                    <option value="react" label="react">
                      react
                    </option>
                    <option value="next" label="next">
                      next
                    </option>

                    <option value="typescript" label="typescript">
                      typescript
                    </option>
                  </select>

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

          {/* Formik with useFormik */}
          <div className="flex mt-10 gap-5 bg-gray-200 p-4  ">
            Formik + useFormik
            <form onSubmit={formik.handleSubmit} className="flex gap-5">
              <select
                name="tech"
                value={formik.values.tech}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ display: "block" }}
                className="select  max-w-xs"
              >
                <option value="" label="Select a tech">
                  Select a tech
                </option>
                <option value="react" label="react">
                  react
                </option>
                <option value="next" label="next">
                  next
                </option>

                <option value="typescript" label="typescript">
                  typescript
                </option>
              </select>

              <button type="submit" className="bg-blue-400 w-fit mx-auto p-2">
                click
              </button>
            </form>
          </div>
        </div>

        <div className="w-1/2 mt-10">
          <div className="  flex flex-wrap justify-around gap-5">
            {TechList?.map((item, index) => {
              return (
                <div key={index} className=" bg-gray-200 w-[30%] h-20">
                  <h1>tech : {item}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <Formik initialValues={{ color: "" }} onSubmit={handleShow}>
        <Form>
          <Field as="select" name="color">
            <option value="red">Red</option>

            <option value="green">Green</option>

            <option value="blue">Blue</option>
          </Field>

          <button type="submit">click</button>
        </Form>
      </Formik> */}

      {/* <Formik initialValues={{ colorss: "" }} onSubmit={handleShow}>
        {({ values, handleChange, handleSubmit , handleBlur}) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block" }}>
              Color
            </label>
            <select
              name="colorss"
              value={values.colorss}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ display: "block" }}
            >
              <option value="" label="Select a color">
                Select a color{" "}
              </option>
              <option value="red" label="red">
                {" "}
                red
              </option>
              <option value="blue" label="blue">
                blue
              </option>
              
              <option value="green" label="green">
                green
              </option>
            </select>

          <button type="submit">click</button>

          </form>
        )}
      </Formik> */}

      {/* <select name="selectedFruit" defaultValue="orange" onChange={handleShowSimple}>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select> */}
    </div>
  );
};

export default SelectOption;
