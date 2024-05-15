import React from 'react'
import FormFactorSelect from './ff-select'
import SizeSelect from './size-select'
import SecVarSelect from './sec-variant'
import StyleSelect from '../style/style-select'
import Logo from '../logo'
import { useAtom } from 'jotai'
import { productAtom, selectedFFAtom, selectedSizeAtom, ffOpenAtom, sizeFilteredAtom, sizeOpenAtom, showSecVarAtom } from '../../../state/atoms'

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
  <div className='w-1/4 my-2 px-2'>
   <Logo />
   <div className='my-4'>
    <div className='text-lg pl-2'>Product type</div>
    <FormFactorSelect />
    {showSize && !ffOpen && !isWindow && <SizeSelect />}
    {showSecVar && secExists && !ffOpen && !sizeOpen && <SecVarSelect />}
   </div>
   <StyleSelect />
  </div>
 )
}

export default Controls
