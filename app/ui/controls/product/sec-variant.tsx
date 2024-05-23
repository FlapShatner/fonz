import React, { useRef } from 'react'
import { cn } from '@/app/utils'
import Chevron from '@/app/icons/chevron'
import SecItem from './sec-item'
import { useOnClickOutside } from 'usehooks-ts'
import { useAtom } from 'jotai'
import {
 productAtom,
 selectedSecVarAtom,
 selectedSizeAtom,
 ffOpenAtom,
 sizeFilteredAtom,
 secVarOpenAtom,
 selectedFFAtom,
 generatedAtom,
} from '@/app/state/atoms'

function SecVarSelect() {
 const ref = useRef(null)
 const [product, setProduct] = useAtom(productAtom)
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [ffOpen, setFFOpen] = useAtom(ffOpenAtom)
 const [generated, setGenerated] = useAtom(generatedAtom)
 const [secVarOpen, setSecVarOpen] = useAtom(secVarOpenAtom)
 const [sizeFiltered, setSizeFiltered] = useAtom(sizeFilteredAtom)
 const [selectedSecVar, setSelectedSecVar] = useAtom(selectedSecVarAtom)

 useOnClickOutside(ref, () => {
  setSecVarOpen(false)
 })

 const handleClick = () => {
  setSecVarOpen(!secVarOpen)
  setFFOpen(false)
 }

 const isBorder = selectedSecVar.id === ''
 const isDisabled = generated.productId != ''

 return (
  <div
   ref={ref}
   className='relative'>
   <div
    onClick={handleClick}
    className={cn(
     'bg-bg-tertiary mx-2 mt-2 py-2 px-2 rounded-md flex items-center justify-between pr-4 cursor-pointer border border-accent',
     !isBorder && 'border-transparent',
     isDisabled && 'pointer-events-none'
    )}>
    {selectedSecVar.label !== '' ? selectedSecVar.label : selectedFF.secondaryVariant}
    <Chevron className='-rotate-90' />
   </div>
   {selectedSize && secVarOpen && (
    <div className='bg-bg-tertiary m-2 rounded-md absolute right-0 left-0 z-10'>
     {selectedSize.secondary.map((s) => (
      <SecItem
       key={s.id}
       setOpen={setSecVarOpen}
       secItem={s}
      />
     ))}
    </div>
   )}
  </div>
 )
}

export default SecVarSelect
