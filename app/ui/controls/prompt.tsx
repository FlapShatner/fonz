import React from 'react'
import { useAtom } from 'jotai'
import { promptAtom } from '@/app/state/atoms'

function Prompt() {
 const [prompt, setPrompt] = useAtom(promptAtom)
 const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setPrompt(e.target.value)
 }
 return (
  <div className='mt-4 flex flex-col'>
   <div className='text-lg pl-2'>Prompt</div>
   <textarea
    onChange={(e) => handleChange(e)}
    className='bg-bg-tertiary border border-txt-secondary rounded-md m-2 resize-none text-sm p-1 '
    rows={5}
   />
  </div>
 )
}

export default Prompt
