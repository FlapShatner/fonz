import { useRef } from 'react'
import { useAtom } from 'jotai'
import { useOnClickOutside } from 'usehooks-ts'
import { cn } from '@/app/utils'
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
  setSelectedSize('')
  setSelectedSecVar(secVarDefault)
  setSizeOpen(false)
  setSecVarOpen(false)
 }

 return (
  <div>
   <div
    ref={ref}
    className='relative'>
    <div
     onClick={handleClick}
     className='bg-bg-tertiary mx-2 mt-2 py-2 px-2 rounded-md flex items-center justify-between pr-4 cursor-pointer'>
     {selectedFF.label}
     <Chevron className='-rotate-90' />
    </div>
    {ffOpen && (
     <div className='bg-bg-tertiary m-2 rounded-md absolute right-0 left-0 z-30'>
      {formFactors.map((formFactor) => (
       <FormFactorItem
        key={formFactor.id}
        setOpen={setFFOpen}
        formFactor={formFactor}
       />
      ))}
     </div>
    )}
   </div>
  </div>
 )
}

export default FormFactorSelect
