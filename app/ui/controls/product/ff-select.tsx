import { useRef } from 'react'
import { useAtom } from 'jotai'
import { useOnClickOutside } from 'usehooks-ts'
import { cn } from '@/app/utils'
import type { FFType } from '@/app/types/product-types'
import type { Option } from '@/app/data/options'
import Chevron from '@/app/icons/chevron'
import FormFactorItem from './ff-item'
import {
 productAtom,
 selectedFFAtom,
 ffOpenAtom,
 sizeOpenAtom,
 secVarOpenAtom,
 selectedSizeAtom,
 selectedSecVarAtom,
 showSecVarAtom,
 secVarDefault,
} from '../../../state/atoms'
import { formFactors } from '../../../data/form-factors'
import { options } from '@/app/data/options'

const FormFactorSelect = () => {
 const ref = useRef(null)
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [selectedSecVar, setSelectedSecVar] = useAtom(selectedSecVarAtom)
 const [ffOpen, setFFOpen] = useAtom(ffOpenAtom)
 const [sizeOpen, setSizeOpen] = useAtom(sizeOpenAtom)
 const [secVarOpen, setSecVarOpen] = useAtom(secVarOpenAtom)
 useOnClickOutside(ref, () => {
  setFFOpen(false)
 })
 const handleClick = () => {
  setFFOpen(!ffOpen)
  setSelectedSize({
   size: '',
   secondary: [],
  })
  setSelectedSecVar(secVarDefault)
  setSizeOpen(false)
  setSecVarOpen(false)
 }
 const showSize = selectedFF.id !== ''

 return (
  <div
   ref={ref}
   className='relative'>
   <div
    onClick={handleClick}
    className={cn(
     'bg-bg-tertiary mx-2 mt-2 py-2 px-2 rounded-md flex items-center justify-between pr-4 cursor-pointer border border-accent',
     showSize && 'border-transparent'
    )}>
    {selectedFF.label ? selectedFF.label : 'Select Product'}

    <Chevron className='-rotate-90' />
   </div>
   {ffOpen && (
    <div className='bg-bg-tertiary m-2 rounded-md absolute right-0 left-0 z-30'>
     {options.map((option) => (
      <FormFactorItem
       key={option.id}
       setOpen={setFFOpen}
       formFactor={option as Option}
      />
     ))}
    </div>
   )}
  </div>
 )
}

export default FormFactorSelect
