import React from 'react'
import Sad from './icons/sad'

function NotFound() {
 const text = "It seems the page you're looking for doesn't exist!"
 return (
  <div className='w-full h-full flex flex-col items-center justify-center gap-8'>
   <h1 className='text-5xl font-semibold text-accent'>Oops!</h1>
   <div className='flex flex-col gap-2 justify-center items-center'>
    <Sad className='w-48 h-48 text-accent' />
    <p className='text-lg'>{text}</p>
   </div>
   <a
    href='/'
    className='border-2 border-accent rounded-md px-4 py-2 font-semibold  text-accent hover:bg-accent hover:text-bg-secondary transition-all'>
    Return home
   </a>
  </div>
 )
}

export default NotFound
