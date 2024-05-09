import React from 'react'
import Bag from './icons/bag'
import { cn } from './utils'
import { smooch } from './layout'

function Header() {
 return (
  <div>
   <div className='bg-announce w-full h-[34px]'>
    <span className='w-full h-full items-center justify-center flex font-light'>Design anything you want!</span>
   </div>
   <div className='bg-black w-full h-[60px] flex items-center px-4 justify-between'>
    <h2 className={cn('text-2xl text-accent', smooch.className)}>Ink Monkey</h2>
    <Bag className='w-4 text-accent' />
   </div>
  </div>
 )
}

export default Header
