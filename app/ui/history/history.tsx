import React from 'react'
import { cn } from '@/app/utils'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import { useAtom } from 'jotai'
import { CustomScroll } from 'react-custom-scroll'
import { promptHistoryAtom } from '@/app/state/atoms'
import HistoryItem from './history-item'
import MobileHistory from './mobile-history'

function HistList() {
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 const [promptHistory] = useAtom(promptHistoryAtom)
 return (
  <div className={cn('w-48 flex flex-col justify-start gap-2 pl-2 mr-6', isMobile && 'flex-row h-28')}>
   <span className={cn('flex w-full justify-center pr-6')}>History</span>
   {promptHistory.map(
    (item, i) =>
     item &&
     item.productId !== '' && (
      <HistoryItem
       key={i}
       item={item}
      />
     )
   )}
  </div>
 )
}

function History() {
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 return (
  <>
   {isMobile ? (
    <MobileHistory />
   ) : (
    <CustomScroll
     handleClass='handle'
     heightRelativeToParent='100%'>
     <HistList />
    </CustomScroll>
   )}
  </>
 )
}

export default History
