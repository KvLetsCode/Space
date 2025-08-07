
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Destination from './components/Destination'
import Crew from './components/Crew'
import Technology from './components/Technology'
import Home from './components/Home'

const data = createRoutesFromElements(
  
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='destination' element={<Destination />} />
    <Route path='crew' element={<Crew />} />
    <Route path='technology' element={<Technology />} />
    </Route>
  
)

const router = createBrowserRouter(data,{
  basename:'/Space'
})


function App() {
  

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
