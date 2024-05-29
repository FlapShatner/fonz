import React from 'react'
import { cn } from '@/app/utils'
import CloseX from '@/app/icons/close-x'

function CloseButton({ className = '' }) {
 return (
  <button
   type='button'
   className={cn('text-white bg-red-600 rounded-full', className)}>
   <CloseX className='w-5' />
  </button>
 )
}

export default CloseButton
