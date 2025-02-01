import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Auth/Register'
import {Routes,Route} from 'react-router-dom'
import Login from './Auth/Login'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Post from './components/Post'
import Private from './Auth/Private'


function App() {
  

  return (
    <>
      <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Private><Dashboard/></Private>}>
            <Route index element={<Profile/>}/>
            <Route path='post' element={<Post/>}/>
            <Route path='profile' element={<Profile/>}/>
          
          
          
          </Route>


      </Routes>
      
    </>
  )
}

export default App
