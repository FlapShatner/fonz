import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
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
 upscaleAndAddAtom,
 cartContentsAtom,
 cartDataAtom,
} from '@/app/state/atoms'

function useModOptions() {
 const [generated, setGenerated] = useAtom(generatedAtom)
 const [wsMessage, setWsMessage] = useAtom(wsMessageAtom)
 const [cartData, setCartData] = useAtom(cartDataAtom)
 const [cartContents, setCartContents] = useAtom(cartContentsAtom)
 const [, setIsLoading] = useAtom(isLoadingAtom)
 const [selectedImage, setSelectedImage] = useAtom(selectedImageAtom)
 const [isUpscaling, setIsUpscaling] = useAtom(isUpscalingAtom)
 const [, setUpscaleAndAdd] = useAtom(upscaleAndAddAtom)
 const [wsId] = useAtom(wsIdAtom)
 const router = useRouter()
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

 const upscale = (cart = false) => {
  if (selectedImage.generated.imgData.publicId === '') {
   toast.error('Please select an image to upscale.')
   return
  }
  setSelectedImage(selectedImageDefault)
  setGenerated(generatedDefault)
  setIsUpscaling(true)
  setIsLoading(true)
  setWsMessage({ event: 'upscale', data: JSON.stringify(selectedImage), id: wsId })
  if (cart) {
   setUpscaleAndAdd(true)
  }
 }

 const addToCart = async (addCartData: { up: boolean; imageUrl: string; productId: string }) => {
  console.log('addCartData:', addCartData)

  const { up, imageUrl, productId } = addCartData ? addCartData : { up: false, imageUrl: '', productId: '' }
  if (!generated.isUpscaled && !up) {
   if (selectedImage.generated.imgData.publicId === '') {
    toast.error('Please select an image to add to cart.')
    return
   } else {
    const cart = true
    upscale(cart)
    return
   }
  }
  if (!cartData.hasCart) {
   console.log('generated:', generated)
   const newCart = await createCart({
    merchandiseId: productId,
    quantity: 1,
    attributes: [{ key: 'imageUrl', value: imageUrl }],
   })
   setCartData({
    cartId: newCart.id,
    hasCart: true,
   })
   router.push('?modal=cart')
  }
  //   setGenerated(generatedDefault)
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
