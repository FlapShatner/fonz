import React from 'react'
import { useAtom } from 'jotai'
import { selectedSizeAtom, productAtom, sizeFilteredAtom, showSecVarAtom } from '@/app/state/atoms'

type SizeItemProps = {
 size: string
 setOpen: (open: boolean) => void
}
function SizeItem({ size, setOpen }: SizeItemProps) {
 const [product, setProduct] = useAtom(productAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [sizeFiltered, setSizeFiltered] = useAtom(sizeFilteredAtom)
 const [showSecVar, setShowSecVar] = useAtom(showSecVarAtom)
 const variants = product.variants.edges

 const filtered = variants.filter((variant) => variant.node.selectedOptions.some((option) => option.value === size))
 const handleSelect = async () => {
  setSizeFiltered(filtered)
  setSelectedSize(size)
  setShowSecVar(true)
  setOpen(false)
  console.log('filtered', filtered)
 }
 return (
  <div
   onClick={handleSelect}
   className='flex justify-between items-center p-2 border-b border-bg-primary cursor-pointer '>
   <span>{size}</span>
  </div>
 )
}

export default SizeItem
