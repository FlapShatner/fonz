import { useState } from 'react'
import { useAtom } from 'jotai'
import Chevron from '@/app/icons/chevron'
import FormFactorItem from './ff-item'
import { productAtom, selectedFFAtom } from '../../state/product-atoms'
import { formFactors } from '../../data/form-factors'

const FormFactorSelect = () => {
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)
 const [open, setOpen] = useState(false)
 const handleClick = () => setOpen(!open)
 return (
  <div className='relative'>
   <div
    onClick={handleClick}
    className='bg-bg-tertiary mx-2 mt-2 py-2 px-2 rounded-md flex items-center justify-between pr-4 cursor-pointer'>
    {selectedFF.label}
    <Chevron className='-rotate-90' />
   </div>
   {open && (
    <div className='bg-bg-tertiary m-2 rounded-md absolute right-0 left-0'>
     {formFactors.map((formFactor) => (
      <FormFactorItem
       key={formFactor.id}
       setOpen={setOpen}
       formFactor={formFactor}
      />
     ))}
    </div>
   )}
  </div>
 )
}

export default FormFactorSelect
