import React from 'react'
import {CircleUserRound} from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between py-10 text-black'>
            <div className='lg:ml-8'>
            <span>Khushi</span>
            </div>
            <div className='flex flex-row'>
                <span className='lg:px-9'>Equipment</span>
                <span className='lg:px-9'>About</span>
                <span className='lg:px-9'>Blog</span>
            </div>
            <div className='lg:mr-8 flex flex-row gap-2'>
                <CircleUserRound/>
                <span>Login</span>
            </div>
    </div>
  )
}
export default Navbar