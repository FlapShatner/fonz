import React from 'react'
import Chevron from '../icons/chevron'
import { shopUrl } from '@/shopUrl'

function StoreBtn() {
 return (
  <a
   className='cursor-pointer flex items-center text-sm text-accent'
   href={shopUrl}>
   <Chevron className='w-4 h-4  text-accent' />
   Back to Store
  </a>
 )
}

export default StoreBtn
