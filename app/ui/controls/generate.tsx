import React from 'react'
import toast from 'react-hot-toast'
import Plus from '@/app/icons/plus'
import { useAtom } from 'jotai'
import {
 wsMessageAtom,
 promptAtom,
 selectedStyleAtom,
 sizeFilteredAtom,
 selectedSecVarAtom,
 selectedFFAtom,
 wsIdAtom,
 productAtom,
 generateErrorAtom,
} from '@/app/state/atoms'
import { assemblePrompt } from '@/app/utils'
import { set } from '@cloudinary/url-gen/actions/variable'

function Generate() {
 const [wsMessage, setWsMessage] = useAtom(wsMessageAtom)
 const [wsId] = useAtom(wsIdAtom)
 const [prompt, setPrompt] = useAtom(promptAtom)
 const [selectedStyle] = useAtom(selectedStyleAtom)
 const [product] = useAtom(productAtom)
 const [selectedSecVar] = useAtom(selectedSecVarAtom)
 const [selectedFF] = useAtom(selectedFFAtom)
 const [filtered] = useAtom(sizeFilteredAtom)
 const [generateError, setGenerateError] = useAtom(generateErrorAtom)

 const isWindow = selectedFF.id === 'wi'
 const secExists = filtered.length > 1
 const isDisabled = !prompt || !selectedStyle.id || !wsId

 const buildMessage = () => {
  let productId
  let idCode
  let isGrid
  let ar
  if (isWindow) {
   productId = product.id
   idCode = selectedFF.idCode
   isGrid = selectedFF.grid
   ar = selectedFF.ar
  } else if (!secExists) {
   const { metafields } = filtered[0].node
   productId = filtered[0].node.id
   idCode = metafields.find(({ key }) => key === 'idcode')?.value
   isGrid = metafields.find(({ key }) => key === 'isgrid')?.value
   ar = metafields.find(({ key }) => key === 'aspectratio')?.value
  } else {
   const { metafields } = selectedSecVar
   productId = selectedSecVar.id
   idCode = metafields.find(({ key }) => key === 'idcode')?.value
   isGrid = metafields.find(({ key }) => key === 'isgrid')?.value
   ar = metafields.find(({ key }) => key === 'aspectratio')?.value
  }
  if (!productId) {
   toast.error('Please select a product', { position: 'top-left' })
   setGenerateError({ error: true, message: 'Please select a product' })
   return
  }
  const messageData = {
   event: 'generate',
   prompt: assemblePrompt(prompt, selectedStyle.prompt, ar, idCode),
   productId,
   isGrid,
   caption: prompt,
   style: selectedStyle.id,
   id: wsId,
  }
  return messageData
 }

 const handleGenerate = () => {
  if (!prompt) {
   toast.error('Please enter a prompt', { position: 'top-left' })
   setGenerateError({ error: true, message: 'Please enter a prompt' })
   return
  }
  const messageData = buildMessage()
  setWsMessage({ event: 'generate', data: JSON.stringify(messageData), id: wsId })
  setPrompt('')
 }

 return (
  <div
   onClick={handleGenerate}
   className='z-50 p-4 pb-8 border-t border-bg-tertiary bg-bg-primary sticky bottom-0'>
   <div className='cursor-pointer gap-1 flex items-center justify-center p-2 py-3 rounded-md bg-txt-secondary text-bg-primary font-semibold'>
    <Plus />
    Generate
   </div>
  </div>
 )
}

export default Generate
