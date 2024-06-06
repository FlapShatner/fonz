import React from 'react'
import { cn } from '../utils'
import { useBreakPoints } from '../hooks/useBreakPoints'
import Controls from './controls/controls'
import ImageBox from './image/imagebox'
import History from './history/history'

function FonzApp() {
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 return (
  <div className={cn('h-app w-full flex', isMobile && 'flex-col')}>
   <Controls />
   <ImageBox />
   <History />
  </div>
 )
}

export default FonzApp
