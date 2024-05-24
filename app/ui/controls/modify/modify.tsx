import React from 'react'
import Logo from '../logo'
import ModOption from './mod-option'
import useModOptions from '@/app/hooks/useModOptions'

function Modify() {
 const optionData = useModOptions()
 return (
  <div className='px-2'>
   <Logo />
   <ModOption option={optionData.purchase} />
   <ModOption option={optionData.variations} />
   <ModOption option={optionData.upscale} />
   <ModOption option={optionData.back} />
  </div>
 )
}

export default Modify
