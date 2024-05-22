import React from 'react'
import { cn } from '@/app/utils'
import { CustomScroll } from 'react-custom-scroll'
import FormFactorSelect from './product/ff-select'
import SizeSelect from './product/size-select'
import NewDesign from './new-design'
import SecVarSelect from './product/sec-variant'
import StyleSelect from './style/style-select'
import Generate from './generate'
import Prompt from './prompt'
import Logo from './logo'
import { useAtom } from 'jotai'
import { productAtom, selectedFFAtom, selectedSizeAtom, ffOpenAtom, sizeFilteredAtom, sizeOpenAtom, showSecVarAtom, generatedAtom } from '../../state/atoms'

function Controls() {
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [ffOpen, setFFOpen] = useAtom(ffOpenAtom)
 const [filtered, setFiltered] = useAtom(sizeFilteredAtom)
 const [sizeOpen, setSizeOpen] = useAtom(sizeOpenAtom)
 const [showSecVar, setShowSecVar] = useAtom(showSecVarAtom)
 const [generated, setGenerated] = useAtom(generatedAtom)
 const showSize = selectedFF.id !== ''
 const secExists = filtered.length > 1
 const isWindow = selectedFF.id === 'wi'
 const isDisabled = generated.productId != ''
 return (
  <div className={cn('w-1/4 pt-2 relative  flex flex-col justify-between')}>
   <CustomScroll
    handleClass='handle'
    heightRelativeToParent='100%'>
    <div className={cn('px-2', isDisabled && 'opacity-20')}>
     <Logo />
     <div className='my-4'>
      <div className='text-lg pl-2'>Product type</div>
      <FormFactorSelect />
      {showSize && !ffOpen && !isWindow && <SizeSelect />}
      {showSecVar && secExists && !ffOpen && !sizeOpen && <SecVarSelect />}
     </div>
     <StyleSelect />
     <Prompt />
    </div>
   </CustomScroll>
   {isDisabled ? <NewDesign /> : <Generate />}
  </div>
 )
}

export default Controls
