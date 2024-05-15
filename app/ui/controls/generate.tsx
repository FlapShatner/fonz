import React from 'react'
import Plus from '@/app/icons/plus'

function Generate() {
 return (
  <div className='z-50 p-4 pb-8 border-t border-bg-tertiary bg-bg-primary sticky bottom-0'>
   <div className='cursor-pointer gap-1 flex items-center justify-center p-2 py-3 rounded-md bg-txt-secondary text-bg-primary font-semibold'>
    <Plus />
    Generate
   </div>
  </div>
 )
}

export default Generate
