import React, { useState } from 'react'
import Chevron from '@/app/icons/chevron'
import SizeItem from './size-item'
import { useAtom } from 'jotai'
import { productAtom, selectedSizeAtom, ffOpenAtom, sizeOpenAtom } from '@/app/state/atoms'

function SizeSelect() {
 const [product, setProduct] = useAtom(productAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [ffOpen, setFFOpen] = useAtom(ffOpenAtom)
 const [sizeOpen, setSizeOpen] = useAtom(sizeOpenAtom)

 const sizeOptions = product.options.find((o) => o.name === 'Size')
 const sizeValues = sizeOptions && sizeOptions.values

 const handleClick = () => {
  setSizeOpen(!sizeOpen)
  setFFOpen(false)
 }

 return (
  <div className='relative'>
   <div
    onClick={handleClick}
    className='bg-bg-tertiary mx-2 mt-2 py-2 px-2 rounded-md flex items-center justify-between pr-4 cursor-pointer'>
    {selectedSize || 'Size'}
    <Chevron className='-rotate-90' />
   </div>
   {sizeOpen && (
    <div className='bg-bg-tertiary m-2 rounded-md absolute right-0 left-0'>
     {sizeValues &&
      sizeValues.map((s) => (
       <SizeItem
        key={s}
        setOpen={setSizeOpen}
        size={s}
       />
      ))}
    </div>
   )}
  </div>
 )
}

export default SizeSelect
