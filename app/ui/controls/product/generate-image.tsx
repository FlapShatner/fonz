import React from 'react'
import { cn } from '@/app/utils'
import Logo from '@/app/ui/controls/logo'
import FormFactorSelect from './ff-select'
import SizeSelect from './size-select'
import SecVarSelect from './sec-variant'
import StyleSelect from '../style/style-select'
import Prompt from '../prompt'
import { useAtom } from 'jotai'
import { productAtom, selectedFFAtom, selectedSizeAtom, ffOpenAtom, sizeFilteredAtom, sizeOpenAtom, showSecVarAtom, generatedAtom } from '@/app/state/atoms'

function ImageGenerate() {
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [ffOpen, setFFOpen] = useAtom(ffOpenAtom)
 const [filtered, setFiltered] = useAtom(sizeFilteredAtom)
 const [sizeOpen, setSizeOpen] = useAtom(sizeOpenAtom)
 const [showSecVar, setShowSecVar] = useAtom(showSecVarAtom)
 const [generated, setGenerated] = useAtom(generatedAtom)
 const showSize = selectedFF.id !== ''
 const secExists = filtered.length > 1
 const isWindow = selectedFF.id === ''

 return (
  <div className={cn('px-2')}>
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
 )
}

export default ImageGenerate
