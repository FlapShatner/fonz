import React from 'react'
import { useAtom } from 'jotai'
import { generatedAtom, selectedFFAtom, selectedSecVarAtom, selectedStyleAtom, selectedSizeAtom, showSecVarAtom } from '@/app/state/atoms'
import { generatedDefault, ffDefault } from '@/app/state/atoms'

function NewDesign() {
 const [generated, setGenerated] = useAtom(generatedAtom)
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [selectedSecVar, setSelectedSecVar] = useAtom(selectedSecVarAtom)
 const [selectedStyle, setSelectedStyle] = useAtom(selectedStyleAtom)
 const [showSecVar, setShowSecVar] = useAtom(showSecVarAtom)

 const handleClick = () => {
  setGenerated(generatedDefault)
  setSelectedFF(ffDefault)
  setSelectedSize({ size: '', secondary: [] })
  setSelectedSecVar({ id: '', label: '', ar: '', grid: false })
  setSelectedStyle({ id: 'none', label: 'None', prompt: '', img: '/none' })
  setShowSecVar(false)
 }
 return (
  <div
   onClick={handleClick}
   className='z-50 p-4 pb-8 border-t border-bg-tertiary bg-bg-primary sticky bottom-0'>
   <div className='cursor-pointer gap-1 flex items-center justify-center p-2 py-3 rounded-md bg-txt-secondary text-bg-primary font-semibold'>
    Start New Design
   </div>
  </div>
 )
}

export default NewDesign
