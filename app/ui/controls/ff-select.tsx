import { useAtom } from 'jotai'
import { cn } from '@/app/utils'
import Chevron from '@/app/icons/chevron'
import FormFactorItem from './ff-item'
import { productAtom, selectedFFAtom, ffOpenAtom, sizeOpenAtom, selectedSizeAtom } from '../../state/atoms'
import { formFactors } from '../../data/form-factors'
import SizeSelect from './size-select'

const FormFactorSelect = () => {
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [ffOpen, setFFOpen] = useAtom(ffOpenAtom)
 const [sizeOpen, setSizeOpen] = useAtom(sizeOpenAtom)
 const handleClick = () => {
  setFFOpen(!ffOpen)
  setSelectedSize('')
  setSizeOpen(false)
 }
 const showSize = selectedFF.id !== ''
 const showSecVariant = selectedSize !== ''
 const isWindow = selectedFF.id === 'wi'
 return (
  <div>
   <div className='relative'>
    <div
     onClick={handleClick}
     className='bg-bg-tertiary mx-2 mt-2 py-2 px-2 rounded-md flex items-center justify-between pr-4 cursor-pointer'>
     {selectedFF.label}
     <Chevron className='-rotate-90' />
    </div>
    {ffOpen && (
     <div className='bg-bg-tertiary m-2 rounded-md absolute right-0 left-0'>
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
   {showSize && !ffOpen && !isWindow && <SizeSelect />}
  </div>
 )
}

export default FormFactorSelect
