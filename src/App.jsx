import './App.css'
import { RouterProvider, createHashRouter } from "react-router-dom";

// import {Home} from './components/Home';
// import {Contact} from './components/Contact';
import {Home,Contact} from './components/index'

const router = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contact",
    element: <Contact />
  }
])

function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>

  )
}

export default App
