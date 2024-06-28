import React from 'react'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import { cn } from '@/app/utils'
import Paste from '@/app/icons/paste'
import { useAtom } from 'jotai'
import useGenerate from '@/app/hooks/useGenerate'
import { promptAtom, promptHistoryAtom, generatedAtom } from '@/app/state/atoms'

function Prompt() {
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 const [prompt, setPrompt] = useAtom(promptAtom)
 const [promptHistory, setPromptHistory] = useAtom(promptHistoryAtom)
 const [generated, setGenerated] = useAtom(generatedAtom)
 const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setPrompt(e.target.value)
 }
 const handlePaste = () => {
  setPrompt(promptHistory[0].caption)
 }
 const generate = useGenerate()
 const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  if (e.key === 'Enter' && !e.shiftKey) {
   e.preventDefault()
   generate()
  }
 }
 const isDisabled = generated.productId != ''
 return (
  <div className={cn('mt-4 flex flex-col')}>
   <div className='text-lg pl-2'>Prompt</div>
   <textarea
    onKeyDown={handleKeyDown}
    onChange={(e) => handleChange(e)}
    value={prompt}
    className={cn('bg-bg-tertiary border border-txt-secondary rounded-md m-2 resize-none text-sm p-1', isDisabled && 'pointer-events-none')}
    rows={5}
   />
   <div
    onClick={handlePaste}
    className={cn('mx-2 ml-auto flex justify-end bg-bg-tertiary rounded-md w-max px-2 gap-2', isDisabled && 'pointer-events-none', isMobile && 'mb-4')}>
    <Paste className='w-4' />
    <p className={cn('text-sm font-light py-[2px] flex cursor-pointer')}>Insert your last prompt</p>
   </div>
  </div>
 )
}

export default Prompt
