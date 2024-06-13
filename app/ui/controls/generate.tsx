import React from 'react'
import { cn } from '@/app/utils'
import { useGenerate } from '@/app/hooks/useGenerate'

import GenButton from './gen-button'
import Plus from '@/app/icons/plus'

function Generate() {
 const { handleGenerate, isLoading } = useGenerate()

 return (
  <div
   onClick={handleGenerate}
   className={cn('z-50 p-4 pb-8 border-t border-bg-tertiary bg-bg-primary sticky bottom-0', isLoading && 'opacity-40 pointer-events-none')}>
   <GenButton>
    <div className='flex gap-2 font-semibold justify-center'>
     <Plus />
     Generate
    </div>
   </GenButton>
  </div>
 )
}

export default Generate
