import React from 'react'
import CartIndicator from './cart-indicator'
// import AccountButton from './account-btn'
import { shopUrl } from '@/shopUrl'
import { cn } from '../utils'
import { smooch } from '../layout'

function Header() {
 return (
  <div>
   <div className='bg-black w-full h-[60px] flex items-center px-4 justify-between'>
    <a
     href={shopUrl}
     className={cn('text-2xl text-accent', smooch.className)}>
     Ink Monkey
    </a>
    <div className='flex gap-4'>
     {/* <AccountButton /> */}
     <CartIndicator />
    </div>
   </div>
  </div>
 )
}

export default Header
