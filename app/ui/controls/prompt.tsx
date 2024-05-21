import React from 'react'
import Paste from '@/app/icons/paste'
import { useAtom } from 'jotai'

import { promptAtom, promptHistoryAtom } from '@/app/state/atoms'

function Prompt() {
 const [prompt, setPrompt] = useAtom(promptAtom)
 const [promptHistory, setPromptHistory] = useAtom(promptHistoryAtom)
 const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setPrompt(e.target.value)
 }
 const handlePaste = () => {
  //   setPrompt(promptHistory[0])
 }
 return (
  <div className='mt-4 flex flex-col'>
   <div className='text-lg pl-2'>Prompt</div>
   <textarea
    onChange={(e) => handleChange(e)}
    value={prompt}
    className='bg-bg-tertiary border border-txt-secondary rounded-md m-2 resize-none text-sm p-1 '
    rows={5}
   />
   <div
    onClick={handlePaste}
    className='mx-2 ml-auto flex justify-end bg-bg-tertiary rounded-md w-max px-2 gap-2'>
    <Paste className='w-4' />
    <p className='text-sm font-light py-[2px] flex cursor-pointer'>Insert your last prompt</p>
   </div>
  </div>
 )
}

export default Prompt
