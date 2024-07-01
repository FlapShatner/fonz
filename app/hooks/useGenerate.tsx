import toast from 'react-hot-toast'
import { useAtom } from 'jotai'
import { useCooldown } from '@/app/hooks/useCooldown'
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
export function useGenerate() {
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
 const [isLoading, setIsLoading] = useAtom(isLoadingAtom)
 const { checkCooldown } = useCooldown()

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
 const productId = isWindow ? selectedFF.handle : localSelectedVariant?.node.id

 const buildMessage = () => {
  const idCode = selectedSecVar.id
  const isGrid = selectedSecVar.grid
  const ar = isWindow ? windowSecVar.ar : selectedSecVar.ar
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
  if (!productId || !selectedSecVar.id) {
   toast.error('Please select a product', { position: 'top-left' })
   setGenerateError({ error: true, message: 'Please select a product' })
   return
  }
  const cdMessage = checkCooldown()
  if (cdMessage.cd) {
   toast.error(cdMessage.message, { position: 'top-left' })
   return
  }

  const messageData = buildMessage()
  if (localSelectedVariant) {
   setSelectedVariant(localSelectedVariant.node)
  }
  setWsMessage({ event: 'generate', data: JSON.stringify(messageData), id: wsId })
  setPrompt('')
 }
 return { handleGenerate, isLoading }
}
