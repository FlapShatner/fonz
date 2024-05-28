import React from 'react'
import Chevron from '@/app/icons/chevron'
import { useAtom } from 'jotai'
import { selectedImageAtom, selectedImageDefault, generatedAtom, generatedDefault } from '@/app/state/atoms'

function BackBtn() {
 const [selectedImage, setSelectedImage] = useAtom(selectedImageAtom)
 const [generated, setIsGenerated] = useAtom(generatedAtom)
 const isUpscaled = generated?.isUpscaled
 const handleClick = () => {
  if (isUpscaled) {
   setIsGenerated(generatedDefault)
  }
  setSelectedImage(selectedImageDefault)
 }
 return (
  <div
   onClick={handleClick}
   className='bg-backdrop py-1 pr-2 m-1 rounded-md flex items-center mr-2 cursor-pointer h-max z-20'>
   <Chevron className='w-6 cursor-pointer' />
   Back
  </div>
 )
}

export default BackBtn
