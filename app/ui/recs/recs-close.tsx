import React from 'react'
import { cn } from '@/app/utils'
type RecsCloseProps = {
 children: React.ReactNode
 variant?: string
}

function RecsClose({ children }: RecsCloseProps) {
 return (
  <button className={cn('mt-4 border-2 border-accent group relative  overflow-hidden overflow-x-hidden rounded-md px-4 py-2 bg-bg-tertiary text-accent')}>
   <span className='relative z-10 text-2xl font-semibold'>{children}</span>
   <span className='absolute inset-0 overflow-hidden rounded-md'>
    <span
     className={cn(
      'absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150'
     )}></span>
   </span>
  </button>
 )
}

export default RecsClose
