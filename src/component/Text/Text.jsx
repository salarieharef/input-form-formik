import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const Text = () => {
  const [Value, setValue] = useState();
  const [FormValue, setFormValue] = useState([]);

  const handleSimpleInput = (e) =>{
    setValue(e.target.value);
    console.log(e.target.value);

  }

  const handleSimpleForm = (e) =>{
    // dont refresh page
    e.preventDefault()
    const title = e.target.title.value
    const desc = e.target.desc.value
    setFormValue([...FormValue , {title , desc}])

  }  

  const handleFormik = (values) =>{
    const title = values.title
    const desc = values.desc
    setFormValue([...FormValue , {title , desc}])
  }
  return (
    <div>
        {/* simole input */}
      <div className='mt-10 flex gap-5 bg-gray-200 p-4'>
        <h1 className='mx-10'>simple input</h1>
        <input type="text" placeholder='write someThing' className='input input-bordered w-1/2' onChange={handleSimpleInput}/>
         value {Value}        
      </div>


      <div className='flex'>


        <div className='w-1/2'>
            {/* simole form */}
            <div className='bg-gray-200 mt-10'>
              <h1 className='ms-10'>simple form</h1>
              <div className='mx-5 flex gap-5 border-2'>

                <form onSubmit={handleSimpleForm} className='border-2 flex gap-5'>
                  <input type="text" name='title' placeholder='title' className='input input-bordered ' />
                  <input type="text" name='desc' placeholder='desc' className='input input-bordered ' />

                  <button type='submit' className='bg-blue-400 w-fit mx-auto p-2'>click</button>


                </form>
                    
              </div>          
          </div>


            {/* Formik with its own Form and Field */}
          <div className='bg-gray-200 mt-10 p-6'>
              <h1>Formik with its own Form anf Field</h1>
              
              <div className='mx-5 flex gap-5 border-2'>

              <Formik initialValues={{title:'' , desc:''}} onSubmit={handleFormik}  className='border-2 '>
                <Form className='flex gap-5'>
                  <Field type='text' name='title' placeholder='title'/>
                  <Field type='text' name='desc' placeholder='desc'/>
                  <button type='submit' className='bg-blue-400 w-fit mx-auto p-2'>click</button>

                </Form>
              </Formik>  

                    
              </div>          
          </div> 
    


            {/* Formik with otehr form and input */}
          <div className='bg-gray-200 mt-10 p-6'>
              <h1>Formik with otehr form and input</h1>
              
              <div className='mx-5 flex gap-5 border-2'>

              <Formik initialValues={{title:'' , desc:''}} onSubmit={handleFormik}  className='border-2 flex flex-col w-1/3'>
              {({ values, handleSubmit, handleChange, setFieldValue }) => (
                <form onSubmit={handleSubmit}  className='flex gap-5'>
                    <input type="text" name='title' value={values.cost} onChange={handleChange} placeholder="title" className="input input-bordered w-full " />
                    <input type="text" name='desc' value={values.cost} onChange={handleChange} placeholder="desc" className="input input-bordered w-full " />
                      <button type='submit' className='bg-blue-400 w-fit mx-auto p-2'>click</button>

                </form>
              )}
              </Formik>  
                  
              </div>          
          </div> 
        </div>


        <div className='w-1/2 mt-10 border-2'>
              <div className='  flex flex-wrap justify-around gap-5'>
                {FormValue?.map((item , index)=>{
                  return(
                    <div key={index} className=' bg-gray-200 w-[30%] h-20'>
                      <h1>title : {item.title}</h1>
                      <h3>desc : {item.desc}</h3>
                    </div>
                  )
                })}
            </div>
        </div>
        
      </div>







    </div>
  )
}

export default Text