import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import '../../css/Outlet.css'

export default function Dashboard() {
  return (
    <>
        <div id='main_container'>
        <Sidebar/>
        <Outlet/>
        </div>
    
    
    </>
  )
}
