import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Text from './component/Text/Text'
import Layout from './Layout/Layout'
import Radio from './component/Radio/Radio'
import CheckBox from './component/CheckBox/CheckBox'
import FileInput from './component/FileInput/FileInput'
import SelectOption from './component/SelectOption/SelectOption'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Text />,
      },
      {
        path: '/Radio',
        element: <Radio />,
      }, 
      {
        path: '/CheckBox',
        element: <CheckBox />,
      },  
      {
        path: '/FileInput',
        element: <FileInput />,
      }, 
      {
        path: '/SelectOption',
        element: <SelectOption />,
      },       
      
      
    ]
  }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
