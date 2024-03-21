import React from 'react'
const Card = () => {
  return (
    <div>
      <div className='flex flex-row justify-evenly m-4 text-slate-900'>
          <div className='flex flex-col'>
              <h1 className='font-bold text-9xl text-slate-400 opacity-30 absolute'>01</h1>
            <div className='px-20'>
              <h1 className='text-5xl font-semibold font-sans mb-2  mt-20'>What level of hiker<br/> you are?</h1>
              <div className=''>
                <p className='font-sans'>Determining what level of hiker you are can be an<br/>important tool when planning future hikes.This<br/>hiking level guide will help you plan hikes according<br/>to different hike ratings set by various websites like<br/>All Trails and Modern Hiker.What type of hiker are<br/>you – novice, moderate, advanced moderate, expert,<br/>or expert backpacker? </p>
              </div> 
            </div>
          </div>
          <div>
              <img src='https://images.unsplash.com/photo-1710606878548-89d37d1fd54b?ixlib=rb-4.0.3' alt="image" width={300} height={250}/>
          </div>
      </div>
      <div className='flex flex-row justify-evenly m-4 text-slate-900'>
          <div>
              <img src='https://images.unsplash.com/photo-1710606878548-89d37d1fd54b?ixlib=rb-4.0.3' alt="image" width={300} height={250}/>
          </div>
          <div className='flex flex-col'>
              <h1 className='font-bold text-9xl text-slate-400 opacity-20 absolute'>02</h1>
            <div className='px-20'>
              <h1 className='text-5xl font-semibold font-sans mb-2  mt-20'>Picking up the right<br/>hiking gear</h1>
              <div className=''>
                <p className='font-sans'>The nice thing about beginning hiking is that you don’t really <br/> need any special gear,you can probably get away with<br/>things you already have.Let’s start with clothing.A typical<br/> mistake hiking beginners make is wearing jeans and regular <br/>clothes, which will get heavy and chafe wif they get sweaty<br/> or wet.</p>
              </div> 
            </div>
          </div>
      </div>
      <div className='flex flex-row justify-evenly m-4 text-slate-900'>
          <div className='flex flex-col'>
              <h1 className='font-bold text-9xl text-slate-400 opacity-30 absolute'>03</h1>
            <div className='px-20'>
              <h1 className='text-5xl font-semibold font-sans mb-2  mt-20'>Understanding your<br/>map and timing</h1>
              <div className=''>
                <p className='font-sans'>To start, print out the hiking guide and map. If it’s raining,<br/> throw them in a Zip-Lock bag. Read over the guide, study<br/> the map, and have a good idea of what to expect. I like to <br/>know what my next landmark is as I hike. For example,<br/> I’ll read the guide and know that say, in a mile, I make a<br/> right turn at the junction..</p>
              </div> 
            </div>
          </div>
          <div>
              <img src='https://images.unsplash.com/photo-1710606878548-89d37d1fd54b?ixlib=rb-4.0.3' alt="image" width={300} height={250}/>
          </div>
      </div>
    </div>
  )
}

export default Card