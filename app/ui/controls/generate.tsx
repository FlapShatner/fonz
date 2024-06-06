import React from 'react'
import { cn } from '@/app/utils'
import { useAtom } from 'jotai'
import GenButton from './gen-button'
import Plus from '@/app/icons/plus'
import toast from 'react-hot-toast'
import {
 wsIdAtom,
 promptAtom,
 isGridAtom,
 productAtom,
 isLoadingAtom,
 generatedAtom,
 wsMessageAtom,
 selectedFFAtom,
 selectedSizeAtom,
 sizeFilteredAtom,
 generateErrorAtom,
 selectedStyleAtom,
 selectedSecVarAtom,
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
 const [isLoading, setIsLoading] = useAtom(isLoadingAtom)

 const windowSecVar = {
  id: 'wi1',
  label: 'Choose size at checkout',
  ar: '4:1',
  grid: false,
 }

 const isWindow = selectedFF.id === 'wi'
 const isMB = selectedFF.id === 'de' || selectedFF.id === 'mb'

 const productVariants = product.variants.edges
 const varsFilteredBySize = productVariants.filter((variant) => variant.node.selectedOptions.some((option) => selectedSize.size.includes(option.value)))
 const localSelectedVariant = varsFilteredBySize.find((variant) => variant.node.selectedOptions.some((option) => option.value.includes(selectedSecVar.label)))

 const buildMessage = () => {
  console.log('vfs', varsFilteredBySize)
  console.log('pvar', productVariants)
  console.log('lsv', localSelectedVariant)
  const productId = isWindow ? selectedFF.handle : localSelectedVariant?.node.id
  console.log('prod ID', productId)
  const idCode = selectedSecVar.id
  const isGrid = selectedSecVar.grid
  const ar = isWindow ? windowSecVar.ar : selectedSecVar.ar
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
   secVar: isWindow ? windowSecVar : selectedSecVar,
   caption: prompt,
   style: selectedStyle.id,
   secVarLabel: selectedFF.secondaryVariant,
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
   className={cn('z-50 p-4 pb-8 border-t border-bg-tertiary bg-bg-primary sticky bottom-0', isLoading && 'opacity-40 pointer-events-none')}>
   <GenButton>
    <div className='flex gap-2 font-semibold'>
     <Plus />
     Generate
    </div>
   </GenButton>
  </div>
 )
}

export default Generate
