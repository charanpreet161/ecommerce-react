import React from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
<h1>Charan</h1>
        <img src={assets.logo} className= 'w-36' alt=""/>
    </div>
  )
}

export default Navbar