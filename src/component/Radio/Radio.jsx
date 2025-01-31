import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

const Radio = () => {
  const [Value, setValue] = useState();
  const [List, setList] = useState([]);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setList([...List, Value]);
  };

  const handleFormik = (values) => {
    setList([...List, values.gender]);
  };

  return (
    <div>
      <div className="flex gap-10">
        <div className="w-1/2">
          {/* simple radio */}
          <div className="mt-10 flex gap-5 bg-gray-200 p-4">
            <h1>simple radio</h1>
            <input
              type="radio"
              name="gender"
              value="man"
              id="d1"
              onChange={handleValue}
            />
            <label htmlFor="d1"> man</label>

            <input
              type="radio"
              name="gender"
              value="woman"
              id="d2"
              onChange={handleValue}
            />
            <label htmlFor="d2"> woman</label>

            <h1>your gender : {Value}</h1>
          </div>

          {/* simple form */}
          <div className="mt-10 flex gap-5 bg-gray-200 p-4 ">
            <h1>simple form</h1>

            <form onSubmit={handleForm} className="flex gap-5">
              <input
                type="radio"
                name="gender"
                value="man"
                id="d1"
                onChange={handleValue}
              />
              <label htmlFor="d1"> man</label>

              <input
                type="radio"
                name="gender"
                value="woman"
                id="d2"
                onChange={handleValue}
              />
              <label htmlFor="d2"> woman</label>

              <button type="submit" className="bg-blue-400 w-fit mx-auto p-2">
                click
              </button>
            </form>
          </div>

          {/* Formik with its own Form and Field */}
          <div className="mt-10  bg-gray-200 p-4 ">
            <h1>Formik with its own Form and Field</h1>

            <Formik initialValues={{ gender: "" }} onSubmit={handleFormik}>
              <Form className="flex">
                <Field type="radio" name="gender" value="man" id="d1" />
                <label htmlFor="d1"> man</label>

                <Field type="radio" name="gender" value="womman" id="d2" />
                <label htmlFor="d2"> womman</label>

                <button type="submit" className="bg-blue-400 w-fit mx-auto p-2">
                  click
                </button>
              </Form>
            </Formik>
          </div>

          {/* Formik with otehr form and input */}
          <div className="mt-10  bg-gray-200 p-4 ">
            <h1>Formik with otehr form and input</h1>

            <Formik initialValues={{ gender: "" }} onSubmit={handleFormik}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <div
                    role="group"
                    aria-labelledby="my-radio-group"
                    className="flex gap-5"
                  >
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="man"
                        onChange={handleChange}
                      />
                      man
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="woman"
                        onChange={handleChange}
                      />
                      woman
                    </label>
                    <div>gender : {values.gender}</div>

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
            {List?.map((item, index) => {
              return (
                <div key={index} className=" bg-gray-200 w-[30%] h-20">
                  <h1>gender : {item}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 
        <Formik initialValues={{picked: ''}}  onSubmit={(values)=>console.log(values)}>
            {({ values , handleSubmit , handleChange }) => (

                <form onSubmit={handleSubmit}>
                    
                    <div id="my-radio-group">Picked</div>
                    
                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                        <input type="radio" name="picked" value='one' onChange={handleChange}/>
                        One
                        </label>
                        
                        <label>
                        <input type="radio" name="picked" value='two' onChange={handleChange}/>
                        two
                        </label>
                        <div>Picked: {values.picked}</div>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik> */}

      {/* <Formik initialValues={{picked: ''}}  onSubmit={(values)=>console.log(values)}>
 
            <Form>
            <div id="my-radio-group">Picked</div>
            
            <div role="group" aria-labelledby="my-radio-group">
                <label>
                <Field type="radio" name="picked" value='one' />
                One
                </label>

                <label>
                <Field type="radio" name="picked" value='two'/>
                two
                </label>
                
            </div>

            <button type="submit">Submit</button>
            </Form>
        
        </Formik>   */}
    </div>
  );
};

export default Radio;
