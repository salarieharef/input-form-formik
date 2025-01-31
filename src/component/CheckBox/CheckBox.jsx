import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

const CheckBox = () => {
  const [ReactFavore, setReactFavore] = useState(false);
  const [NexttFavore, setNexttFavore] = useState(false);
  const [TypeScripttFavore, setTypeScripttFavore] = useState(false);
  const [Favorite, setFavorite] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    ReactFavore && setFavorite((old) => [...old, "react"]);
    NexttFavore && setFavorite((old) => [...old, "next"]);
    TypeScripttFavore && setFavorite((old) => [...old, "typescript"]);
  };

  const handleFormik = (values) => {
    const newFavorite = values.checked;
    if (values.toggle) {
      newFavorite.forEach((item) => {
        setFavorite((old) => [...old, item]);
      });
    } else {
      alert("check the accept");
    }
  };
  return (
    <div>
      <div className="flex gap-10">
        <div className="w-1/2">
          {/* simple radio */}
          <div className="mt-10 flex gap-5 bg-gray-200 p-4">
            <h1>simple radio</h1>
            <input
              type="checkbox"
              value={ReactFavore}
              id="d1"
              onChange={() => setReactFavore(!ReactFavore)}
            />
            <label htmlFor="d1"> react</label>

            <input
              type="checkbox"
              value={NexttFavore}
              id="d2"
              onChange={() => setNexttFavore(!NexttFavore)}
            />
            <label htmlFor="d2"> next</label>

            <input
              type="checkbox"
              value={TypeScripttFavore}
              id="d3"
              onChange={() => setTypeScripttFavore(!TypeScripttFavore)}
            />
            <label htmlFor="d3"> typescript</label>

            <h3 className="flex gap-2">
              your favorite :{ReactFavore && <h3>react</h3>}
              {NexttFavore && <h3>next</h3>}
              {TypeScripttFavore && <h3>typescript</h3>}
            </h3>
          </div>

          {/* simple form */}
          <div className="mt-10 flex gap-5 bg-gray-200 p-4 ">
            <h1>simple form</h1>

            <form onSubmit={handleForm} className="flex gap-5">
              <input
                type="checkbox"
                value={ReactFavore}
                id="d1"
                onChange={() => setReactFavore(!ReactFavore)}
              />
              <label htmlFor="d1"> react</label>

              <input
                type="checkbox"
                value={NexttFavore}
                id="d2"
                onChange={() => setNexttFavore(!NexttFavore)}
              />
              <label htmlFor="d2"> next</label>

              <input
                type="checkbox"
                value={TypeScripttFavore}
                id="d3"
                onChange={() => setTypeScripttFavore(!TypeScripttFavore)}
              />
              <label htmlFor="d3"> typescript</label>

              <button type="submit" className="bg-blue-400 w-fit mx-auto p-2">
                click
              </button>
            </form>
          </div>

          {/* Formik with its own Form and Field */}
          <div className="mt-10  bg-gray-200 p-4 ">
            <h1>Formik with its own Form and Field</h1>

            <Formik
              initialValues={{ toggle: true, checked: [] }}
              onSubmit={handleFormik}
            >
              <Form className="flex gap-5">
                <label>
                  {/* use somewher like remember me*/}
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
        </div>

        <div className="w-1/2 mt-10">
          <div className="  flex flex-wrap justify-around gap-5">
            {Favorite?.map((item, index) => {
              return (
                <div key={index} className=" bg-gray-200 w-[30%] h-20">
                  <h1>gender : {item}</h1>
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
