import React from 'react'
import Chevron from '@/app/icons/chevron'
import { useAtom } from 'jotai'
import { productAtom, selectedSizeAtom, ffOpenAtom, sizeOpenAtom, secVarOpenAtom } from '@/app/state/atoms'

function SecVarSelect() {
 const [product, setProduct] = useAtom(productAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [ffOpen, setFFOpen] = useAtom(ffOpenAtom)
 const [sizeOpen, setSizeOpen] = useAtom(sizeOpenAtom)
 const [secVarOpen, setSecVarOpen] = useAtom(secVarOpenAtom)

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
   {secVarOpen && <div className='bg-bg-tertiary m-2 rounded-md absolute right-0 left-0'></div>}
  </div>
 )
}

export default SecVarSelect
