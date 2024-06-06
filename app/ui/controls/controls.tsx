import React from 'react'
import { cn } from '@/app/utils'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import { CustomScroll } from 'react-custom-scroll'
import NewDesign from './new-design'
import GenerateImage from './product/generate-image'
import Modify from './modify/modify'
import Generate from './generate'
import { useAtom } from 'jotai'
import { generatedAtom } from '../../state/atoms'

function Controls() {
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 const [generated, setGenerated] = useAtom(generatedAtom)
 const isModify = generated.productId && generated.productId != ''
 return (
  <div className={cn('w-1/4 pt-2 relative flex flex-col justify-between', isMobile && 'w-full')}>
   <CustomScroll
    handleClass='handle'
    heightRelativeToParent='100%'>
    {isModify ? <Modify /> : <GenerateImage />}
   </CustomScroll>
   {isModify ? <NewDesign /> : <Generate />}
  </div>
 )
}

export default Controls
