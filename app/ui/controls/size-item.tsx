import React from 'react'
import { useAtom } from 'jotai'
import { selectedSizeAtom, productAtom, sizeFilteredAtom } from '@/app/state/atoms'

type SizeItemProps = {
 size: string
 setOpen: (open: boolean) => void
}
function SizeItem({ size, setOpen }: SizeItemProps) {
 const [product, setProduct] = useAtom(productAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [sizeFiltered, setSizeFiltered] = useAtom(sizeFilteredAtom)
 const variants = product.variants.edges

 const handleSelect = async () => {
  setSelectedSize(size)
  setSizeFiltered(variants.filter((variant) => variant.node.selectedOptions.some((option) => option.value === size)))
  setOpen(false)
 }
 console.log('sizeFiltered', sizeFiltered)
 return (
  <div
   onClick={handleSelect}
   className='flex justify-between items-center p-2 border-b border-bg-primary cursor-pointer '>
   <span>{size}</span>
  </div>
 )
}

export default SizeItem
