import { useAtom } from 'jotai'
import toast from 'react-hot-toast'
import { createCart } from '../storefront-api/cart'
import {
 generatedAtom,
 generatedDefault,
 selectedImageAtom,
 wsIdAtom,
 wsMessageAtom,
 isLoadingAtom,
 selectedImageDefault,
 isUpscalingAtom,
 cartDataAtom,
} from '@/app/state/atoms'

function useModOptions() {
 const [generated, setGenerated] = useAtom(generatedAtom)
 const [wsMessage, setWsMessage] = useAtom(wsMessageAtom)
 const [cartData, setCartData] = useAtom(cartDataAtom)
 const [, setIsLoading] = useAtom(isLoadingAtom)
 const [selectedImage, setSelectedImage] = useAtom(selectedImageAtom)
 const [isUpscaling, setIsUpscaling] = useAtom(isUpscalingAtom)
 const [wsId] = useAtom(wsIdAtom)

 const goBack = () => {
  setGenerated(generatedDefault)
 }

 const makeVariations = () => {
  if (selectedImage.generated.imgData.publicId === '') {
   toast.error('Please select an image to make variations.')
   return
  }
  setSelectedImage(selectedImageDefault)
  setGenerated(generatedDefault)
  setIsLoading(true)
  setWsMessage({ event: 'variations', data: JSON.stringify(selectedImage), id: wsId })
 }

 const upscale = () => {
  if (selectedImage.generated.imgData.publicId === '') {
   toast.error('Please select an image to upscale.')
   return
  }
  setSelectedImage(selectedImageDefault)
  setGenerated(generatedDefault)
  setIsUpscaling(true)
  setIsLoading(true)
  setWsMessage({ event: 'upscale', data: JSON.stringify(selectedImage), id: wsId })
 }

 const addToCart = async () => {
  if (selectedImage.generated.imgData.publicId === '') {
   toast.error('Please select an image to add to cart.')
   return
  }
  if (!cartData.hasCart) {
   const newCart = await createCart({
    merchandiseId: generated.productId,
    quantity: 1,
   })
   setCartData({
    cartId: newCart.id,
    hasCart: true,
   })
  }
  setGenerated(generatedDefault)
 }

 const optionData = {
  purchase: {
   id: 'purchase',
   label: 'Add to Cart',
   addToCart: addToCart,
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
