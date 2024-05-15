import React, { useRef } from 'react'
import Chevron from '@/app/icons/chevron'
import SecItem from './sec-item'
import { useOnClickOutside } from 'usehooks-ts'
import { useAtom } from 'jotai'
import { productAtom, selectedSecVarAtom, selectedSizeAtom, ffOpenAtom, sizeFilteredAtom, secVarOpenAtom } from '@/app/state/atoms'

function SecVarSelect() {
 const ref = useRef(null)
 const [product, setProduct] = useAtom(productAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [ffOpen, setFFOpen] = useAtom(ffOpenAtom)
 const [secVarOpen, setSecVarOpen] = useAtom(secVarOpenAtom)
 const [sizeFiltered, setSizeFiltered] = useAtom(sizeFilteredAtom)
 const [selectedSecVar, setSelectedSecVar] = useAtom(selectedSecVarAtom)

 const secOptions = product.options.find((o) => o.name != 'Size')
 const label = selectedSecVar.selectedOptions.find((o) => o.name != 'Size')

 useOnClickOutside(ref, () => {
  setSecVarOpen(false)
 })

 const handleClick = () => {
  setSecVarOpen(!secVarOpen)
  setFFOpen(false)
 }

 return (
  <div className='relative'>
   <div
    onClick={handleClick}
    className='bg-bg-tertiary mx-2 mt-2 py-2 px-2 rounded-md flex items-center justify-between pr-4 cursor-pointer'>
    {label?.value || (secOptions && secOptions.name)}
    <Chevron className='-rotate-90' />
   </div>
   {sizeFiltered.length > 1 && secVarOpen && (
    <div
     ref={ref}
     className='bg-bg-tertiary m-2 rounded-md absolute right-0 left-0 z-10'>
     {sizeFiltered.map((s) => (
      <SecItem
       key={s.node.id}
       setOpen={setSecVarOpen}
       secItem={s.node}
      />
     ))}
    </div>
   )}
  </div>
 )
}

export default SecVarSelect
