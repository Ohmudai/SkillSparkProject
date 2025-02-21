import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import '../../css/Outlet.css'
import {Helmet} from 'react-helmet'

export default function Dashboard() {
  return (
    <>
    <Helmet><title>Dashboard</title></Helmet>
        <div id='main_container'>
        <Sidebar/>
        <Outlet/>
        </div>
    
    
    </>
  )
}
