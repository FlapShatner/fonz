import React from 'react'
import { cn } from '@/app/utils'
import GenButton from './gen-button'
import { useAtom } from 'jotai'
import { generatedAtom, selectedFFAtom, selectedSecVarAtom, selectedStyleAtom, selectedSizeAtom, showSecVarAtom } from '@/app/state/atoms'
import { generatedDefault, ffDefault, isLoadingAtom } from '@/app/state/atoms'

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
   className={cn('z-50 p-4 pb-8 border-t border-bg-tertiary bg-bg-primary sticky bottom-0 font-semibold')}>
   <GenButton>Start New Design</GenButton>
  </div>
 )
}

export default NewDesign
