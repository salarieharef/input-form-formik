import { Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";

const CheckBox = () => {
  const [Favorite, setFavorite] = useState([]);

  const handleFormik = (values) => {
    if (values.toggle) {
      setFavorite(values.checked);
    } else {
      alert("check the accept");
    }
  };

  const formik = useFormik({
    initialValues: {
      toggle: true,
      checked: [],
    },
    onSubmit: (values) => {
      if (values.toggle) {
        setFavorite(values.checked);
      } else {
        alert("check the accept");
      }
    },
  });
  return (
    <div>
      <div className="flex gap-10">
        <div className="w-1/2">
          {/* Formik with its own Form and Field */}
          <div className="mt-10  bg-gray-200 p-4 ">
            <h1>Formik with its own Form and Field</h1>

            <Formik
              initialValues={{ toggle: true, checked: [] }}
              onSubmit={handleFormik}
            >
              <Form className="flex gap-5">
                <label>
                  {/* use somewhere like remember me*/}
                  <Field type="checkbox" name="toggle" />
                  accept
                  <p className="">(check this for add)</p>
                </label>

                <div
                  role="group"
                  aria-labelledby="checkbox-group"
                  className="flex gap-2"
                >
                  <label>
                    <Field type="checkbox" name="checked" value="react" />
                    react
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="next" />
                    next
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="typescript" />
                    typescript
                  </label>

                  <button
                    type="submit"
                    className="bg-blue-400 w-fit mx-auto p-2"
                  >
                    click
                  </button>
                </div>
              </Form>
            </Formik>
          </div>

          {/* Formik with otehr form and input */}
          <div className="mt-10  bg-gray-200 p-4 ">
            <h1>Formik with otehr form and input</h1>

            <Formik
              initialValues={{ toggle: true, checked: [] }}
              onSubmit={handleFormik}
            >
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit} className="flex gap-5">
                  <label>
                    <input
                      type="checkbox"
                      name="toggle"
                      onChange={handleChange}
                    />
                    accept
                    <p className="">(check this for add)</p>
                  </label>

                  <div
                    role="group"
                    aria-labelledby="checkbox-group"
                    className="flex gap-2"
                  >
                    <label>
                      <input
                        type="checkbox"
                        name="checked"
                        value="react"
                        onChange={handleChange}
                      />
                      react
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="checked"
                        value="next"
                        onChange={handleChange}
                      />
                      next
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="checked"
                        value="typescript"
                        onChange={handleChange}
                      />
                      typescript
                    </label>

                    <button
                      type="submit"
                      className="bg-blue-400 w-fit mx-auto p-2"
                    >
                      click
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          {/* Formik with useFormik */}
          <div className="mt-10  bg-gray-200 p-4 ">
            <h1>Formik with useFormik</h1>

            <form onSubmit={formik.handleSubmit} className="flex gap-5">
              <label>
                <input
                  type="checkbox"
                  name="toggle"
                  onChange={formik.handleChange}
                />
                accept
                <p className="">(check this for add)</p>
              </label>

              <div
                role="group"
                aria-labelledby="checkbox-group"
                className="flex gap-2"
              >
                <label>
                  <input
                    type="checkbox"
                    name="checked"
                    value="react"
                    onChange={formik.handleChange}
                  />
                  react
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="checked"
                    value="next"
                    onChange={formik.handleChange}
                  />
                  next
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="checked"
                    value="typescript"
                    onChange={formik.handleChange}
                  />
                  typescript
                </label>

                <button type="submit" className="bg-blue-400 w-fit mx-auto p-2">
                  click
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-1/2 mt-10">
          <div className="  flex flex-wrap justify-around gap-5">
            {Favorite?.map((item, index) => {
              return (
                <div key={index} className=" bg-gray-200 w-[30%] h-20">
                  <h1>tech : {item}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <Formik initialValues={{ toggle: true,checked: [],}} onSubmit={(values)=>console.log(values)}>
        {({ values , handleSubmit , handleChange}) => (
            <form  onSubmit={handleSubmit}>
                <label>
                    <Field type="checkbox" name="toggle" />
                    {`${values.toggle}`}
                </label>


                <div id="checkbox-group">Checked</div>

                <div role="group" aria-labelledby="checkbox-group">
                    <label>
                    <input type="checkbox" name="checked" value="One"  onChange={handleChange} />
                    One
                    </label>
                    <label>
                    <input type="checkbox" name="checked" value="Two"  onChange={handleChange} />
                    Two
                    </label>
                    <label>
                    <input type="checkbox" name="checked" value="Three"  onChange={handleChange}/>
                    Three
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>
        )}
        </Formik> */}

      {/* 
        <Formik initialValues={{ toggle: true,checked: [],}} onSubmit={(values)=>console.log(values)}>

            <Form>

            <label>
                <Field type="checkbox" name="toggle" />
            </label>


            <div id="checkbox-group">Checked</div>
            <div role="group" aria-labelledby="checkbox-group">
                <label>
                <Field type="checkbox" name="checked" value="One" />
                One
                </label>
                <label>
                <Field type="checkbox" name="checked" value="Two" />
                Two
                </label>
                <label>
                <Field type="checkbox" name="checked" value="Three" />
                Three
                </label>
            </div>

            <button type="submit">Submit</button>
            </Form>
        
        </Formik>  */}
    </div>
  );
};

export default CheckBox;
