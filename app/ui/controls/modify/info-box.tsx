import React from 'react'
import { useAtom } from 'jotai'
import { cn } from '@/app/utils'
import { selectedImageAtom, generatedAtom } from '@/app/state/atoms'
import { options } from '@/app/data/options'
import { styleOptions } from '@/app/data/style-options'
function InfoBox() {
 const [selectedImage] = useAtom(selectedImageAtom)
 const [generated] = useAtom(generatedAtom)
 const isUpscaled = generated?.isUpscaled
 const ff = options.find((option) => option.id === generated.ff)
 const style = styleOptions.find((style) => style.id === generated.style)
 const secVarLabel = generated.secVarLabel
 const isWindow = generated.ff === 'wi'
 return (
  <div className={cn('flex flex-col cursor-pointer bg-bg-primary h-max w-max px-2 pb-1 rounded-br-md z-40 mr-auto')}>
   <p className='text-sm'>{generated.caption}</p>
   {isUpscaled && <p className='text-sm'>Upscaled</p>}
   <p className='text-sm'>{ff?.label}</p>
   {!isWindow && <p className='text-sm'>Size: {generated.size} </p>}
   {secVarLabel !== 'none' && (
    <p className='text-sm'>
     {secVarLabel === 'Color' && `T-Shirt`} {secVarLabel}: {generated.secVar.label}
    </p>
   )}
   <p className='text-sm'>Style: {style?.label} </p>
  </div>
 )
}

export default InfoBox
