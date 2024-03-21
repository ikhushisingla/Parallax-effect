import React from 'react'
import { ArrowDown } from 'lucide-react';
import {Instagram} from 'lucide-react'
import {TwitterIcon} from 'lucide-react'

const Hero = () => {
  return (
    <div className='flex flex-row text-white justify-between py-24'>
        <div className='flex flex-col gap-6 justify-center items-center'>
            <p className='rotate-90 py-3 text-slate-700'>Follow us</p>
            <Instagram className='text-slate-700'/>
            <TwitterIcon className='text-slate-700'/>
        </div>
        <div>
            <p className='text-xl font-serif text-slate-900'>____ A HIKING GUIDE</p>
            <p className='text-5xl py-5 font-serif text-slate-700' >Be Prepared for the <br/>mountains and beyond!</p>
            <p className='flex gap-3 text-slate-700'>Scroll down<ArrowDown/></p>
        </div>
        <div className='flex flex-col gap-6 justify-center items-center'>
            <p className='rotate-90 py-3 text-slate-700'>Follow us</p>
            <Instagram className='text-slate-700'/>
            <TwitterIcon className='text-slate-700'/>
        </div>
    </div>
  )
}

export default Hero