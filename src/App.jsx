import React from 'react'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Jobs from './Components/Jobs'
import Register from './Components/Register'
import Login from './Components/Login'
import SingleJob from './Components/SingleJob'
import AddJob from './Components/AddJob'
import EditJob from './Components/EditJob'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/jobs' element={<Jobs/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/job/:id' element={<SingleJob/>}/>
       <Route path='/addJob' element={<AddJob/>}/>
       <Route path='/editJob' element={<EditJob/>}/>
      </Routes>
    </div>
  )
}

export default App
