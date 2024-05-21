import React from 'react'
import { useAtom } from 'jotai'
import { Variant } from '@/app/data/options'
import { selectedSizeAtom, productAtom, sizeFilteredAtom, showSecVarAtom, selectedSecVarAtom } from '@/app/state/atoms'

type SizeItemProps = {
 size: Variant
 setOpen: (open: boolean) => void
}
function SizeItem({ size, setOpen }: SizeItemProps) {
 const [product, setProduct] = useAtom(productAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [sizeFiltered, setSizeFiltered] = useAtom(sizeFilteredAtom)
 const [showSecVar, setShowSecVar] = useAtom(showSecVarAtom)
 const [selectedSecVar, setSelectedSecVar] = useAtom(selectedSecVarAtom)
 const variants = product.variants.edges

 const filtered = variants.filter((variant) => variant.node.selectedOptions.some((option) => option.value === size.size))
 const handleSelect = async () => {
  setSizeFiltered(filtered)
  setSelectedSize(size)
  if (size.secondary.length === 1) {
   setSelectedSecVar(size.secondary[0])
  }
  setShowSecVar(true)
  setOpen(false)
  console.log('filtered', filtered)
 }
 return (
  <div
   onClick={handleSelect}
   className='flex justify-between items-center p-2 border-b border-bg-primary cursor-pointer '>
   <span>{size.size}</span>
  </div>
 )
}

export default SizeItem
