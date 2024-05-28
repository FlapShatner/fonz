import React from 'react'
import { cn } from '@/app/utils'
import Logo from '../logo'
import ModOption from './mod-option'
import useModOptions from '@/app/hooks/useModOptions'
import { useAtom } from 'jotai'
import { isLoadingAtom } from '@/app/state/atoms'

function Modify() {
 const [isLoading, setIsLoading] = useAtom(isLoadingAtom)
 const optionData = useModOptions()
 return (
  <div className={cn('px-2', isLoading && 'opacity-30 pointer-events-none')}>
   <Logo />
   <ModOption option={optionData.purchase} />
   <ModOption option={optionData.variations} />
   <ModOption option={optionData.upscale} />
   <ModOption option={optionData.back} />
  </div>
 )
}

export default Modify
