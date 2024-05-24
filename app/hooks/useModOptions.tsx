import { useAtom } from 'jotai'
import toast from 'react-hot-toast'
import { generatedAtom, generatedDefault, selectedImageAtom, wsIdAtom, wsMessageAtom } from '@/app/state/atoms'

function useModOptions() {
 const [generated, setGenerated] = useAtom(generatedAtom)
 const [selectedImage] = useAtom(selectedImageAtom)
 const [wsId] = useAtom(wsIdAtom)
 const [wsMessage, setWsMessage] = useAtom(wsMessageAtom)
 const goBack = () => {
  setGenerated(generatedDefault)
 }

 const makeVariations = () => {
  if (selectedImage.generated.imgData.publicId === '') {
   toast.error('Please select an image to make variations.')
   return
  }
  setWsMessage({ event: 'variations', data: JSON.stringify(selectedImage), id: wsId })
 }

 const upscale = () => {
  if (selectedImage.generated.imgData.publicId === '') {
   toast.error('Please select an image to upscale.')
   return
  }
 }

 const optionData = {
  purchase: {
   id: 'purchase',
   label: 'Purchase Design',
  },
  variations: {
   id: 'vars',
   label: 'Make Variations',
   makeVariations: makeVariations,
  },
  upscale: {
   id: 'upscale',
   label: 'Upscale',
   upscale: upscale,
  },
  back: {
   id: 'back',
   label: 'Go Back',
   goBack: goBack,
  },
 }

 return optionData
}
export default useModOptions
