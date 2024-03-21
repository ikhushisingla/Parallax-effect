import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row justify-around text-white'>
        <div className='flex flex-col text-slate-800'>
            <h1 className='font-bold text-gray-900'>More about Company</h1>
            <p className='py-1'>Achievement</p>
            <p className='py-1'>Work Culture</p>
            <p className='py-1'>Founders</p>
            <p className='py-1'>Services</p>
        </div>
        <div className='flex flex-col text-slate-800'>
            <h1 className='font-bold text-gray-900'>More on the blog</h1>
            <p className='py-1'>About us</p>
            <p className='py-1'>Contributors and writers</p>
            <p className='py-1'>Write for us</p>
            <p className='py-1'>Contact us</p>
            <p className='py-1'>Privacy policy</p>
        </div>
        <div className='flex flex-col text-slate-800'>
            <h1 className='font-bold text-gray-900'>More about us</h1>
            <p className='py-1'>Teams</p>
            <p className='py-1'>Jobs</p>
            <p className='py-1'>Careers</p>
            <p className='py-1'>Press</p>
            <p className='py-1'>Address</p>
        </div>
    </div>
  )
}

export default Footer