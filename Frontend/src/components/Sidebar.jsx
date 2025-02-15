import React from 'react'
import '../../css/Sidebar.css'
import {Link} from 'react-router-dom';
export default function Sidebar() {
  return (
    <>
        <div id='sidebar'>
            <div id='profile'><Link to='profile'><button>Profile</button></Link></div>
            <div id='post'><Link to='post'><button>Post</button></Link></div>
            <div><Link to="allpost"><button>All Post</button></Link></div>
            <div><Link to='/login'><button>Log Out</button></Link></div>


        </div>
    
    </>
    
  )
}
