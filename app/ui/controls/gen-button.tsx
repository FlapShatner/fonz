import React from 'react'

type GenButtonProps = {
 children: React.ReactNode
}

function GenButton({ children }: GenButtonProps) {
 return (
  <button className='group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-txt-secondary px-8 py-2 text-bg-secondary w-full'>
   <span className='relative z-10'>{children}</span>
   <span className='absolute inset-0 overflow-hidden rounded-md'>
    <span className='absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-accent transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150'></span>
   </span>
  </button>
 )
}

export default GenButton
