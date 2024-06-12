import React from 'react'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import { cn } from '@/app/utils'
import Logo from '../logo'
import ModOption from './mod-option'
import InfoBox from './info-box'
import useModOptions from '@/app/hooks/useModOptions'
import { useAtom } from 'jotai'
import { isLoadingAtom, generatedAtom } from '@/app/state/atoms'

function Modify() {
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 const [isLoading, setIsLoading] = useAtom(isLoadingAtom)
 const [generated] = useAtom(generatedAtom)
 const optionData = useModOptions()
 const isUpscaled = generated && generated.isUpscaled
 return (
  <div className={cn('px-2', isLoading && 'opacity-30 pointer-events-none', isMobile && 'pb-4')}>
   <Logo />
   <InfoBox />
   {/* <ModOption option={optionData.purchase} /> */}
   <div className={cn(isUpscaled && 'opacity-40 pointer-events-none')}>
    <ModOption option={optionData.variations} />
    <ModOption option={optionData.upscale} />
   </div>
   <ModOption option={optionData.back} />
  </div>
 )
}

export default Modify
