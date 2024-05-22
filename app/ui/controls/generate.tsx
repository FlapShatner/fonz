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
 isGridAtom,
 selectedSizeAtom,
 generatedAtom,
 selectedVariantAtom,
} from '@/app/state/atoms'
import { assemblePrompt } from '@/app/utils'

function Generate() {
 const [wsMessage, setWsMessage] = useAtom(wsMessageAtom)
 const [wsId] = useAtom(wsIdAtom)
 const [prompt, setPrompt] = useAtom(promptAtom)
 const [selectedStyle] = useAtom(selectedStyleAtom)
 const [product] = useAtom(productAtom)
 const [selectedSecVar] = useAtom(selectedSecVarAtom)
 const [selectedFF] = useAtom(selectedFFAtom)
 const [filtered] = useAtom(sizeFilteredAtom)
 const [isGrid, setIsGrid] = useAtom(isGridAtom)
 const [selectedSize] = useAtom(selectedSizeAtom)
 const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom)
 const [generateError, setGenerateError] = useAtom(generateErrorAtom)
 const [generated, setGenerated] = useAtom(generatedAtom)

 const isWindow = selectedFF.id === 'wi'
 const secExists = filtered.length > 1
 const isDisabled = !prompt || !selectedStyle.id || !wsId
 const isSizeOnly = selectedFF.id === 'de' || selectedFF.id === 'mb'
 const isNewDesign = generated.productId != ''

 const productVariants = product.variants.edges
 const varsFilteredBySize = productVariants.filter((variant) => variant.node.selectedOptions.some((option) => option.value === selectedSize.size))
 const localSelectedVariant = varsFilteredBySize.find((variant) => variant.node.selectedOptions.some((option) => option.value === selectedSecVar.label))
 const decalSelectedVariant = productVariants.find((variant) => variant.node.selectedOptions.some((option) => option.value.includes(selectedSize.size)))

 const buildMessage = () => {
  console.log('pvar', productVariants)

  console.log('lsv', localSelectedVariant)
  const productId = isSizeOnly ? decalSelectedVariant : isWindow ? selectedFF.handle : localSelectedVariant?.node.id
  const idCode = selectedSecVar.id
  const isGrid = selectedSecVar.grid
  const ar = selectedSecVar.ar
  if (!productId) {
   toast.error('Please select a product', { position: 'top-left' })
   setGenerateError({ error: true, message: 'Please select a product' })
   return
  }
  setIsGrid(isGrid)
  const messageData = {
   event: 'generate',
   prompt: assemblePrompt(prompt, selectedStyle.prompt, ar, idCode),
   productId,
   isGrid,
   ff: selectedFF.id,
   size: selectedSize.size,
   secVar: selectedSecVar,
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
  if (localSelectedVariant) {
   setSelectedVariant(localSelectedVariant.node)
  }
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
