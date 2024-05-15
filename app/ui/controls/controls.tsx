import React from 'react'
import { CustomScroll } from 'react-custom-scroll'
import FormFactorSelect from './product/ff-select'
import SizeSelect from './product/size-select'
import SecVarSelect from './product/sec-variant'
import StyleSelect from './style/style-select'
import Generate from './generate'
import Prompt from './prompt'
import Logo from './logo'
import { useAtom } from 'jotai'
import { productAtom, selectedFFAtom, selectedSizeAtom, ffOpenAtom, sizeFilteredAtom, sizeOpenAtom, showSecVarAtom } from '../../state/atoms'

function Controls() {
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [ffOpen, setFFOpen] = useAtom(ffOpenAtom)
 const [filtered, setFiltered] = useAtom(sizeFilteredAtom)
 const [sizeOpen, setSizeOpen] = useAtom(sizeOpenAtom)
 const [showSecVar, setShowSecVar] = useAtom(showSecVarAtom)
 const showSize = selectedFF.id !== ''
 const secExists = filtered.length > 1
 const isWindow = selectedFF.id === 'wi'
 return (
  <div className='w-1/4 pt-2 relative  flex flex-col justify-between'>
   <CustomScroll
    handleClass='handle'
    heightRelativeToParent='100%'>
    <div className='px-2'>
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
   <Generate />
  </div>
 )
}

export default Controls
