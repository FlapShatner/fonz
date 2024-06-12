import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import { useCooldown } from '@/app/hooks/useCooldown'
import toast from 'react-hot-toast'
import { createCart, addCartLine } from '../storefront-api/cart'
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
 shopAtom,
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
 const [shop] = useAtom(shopAtom)
 const { checkCooldown } = useCooldown()
 const router = useRouter()
 const goBack = () => {
  setGenerated(generatedDefault)
 }

 const makeVariations = () => {
  // const cdMessage = checkCooldown()
  // if (cdMessage.cd) {
  //  toast.error(cdMessage.message)
  //  return
  // }
  if (selectedImage.generated.imgData.publicId === '') {
   toast.error('Please select an image to make variations.')
   return
  }
  setSelectedImage(selectedImageDefault)
  setGenerated(generatedDefault)
  setIsLoading(true)
  setWsMessage({ event: 'variations', data: JSON.stringify(selectedImage), id: wsId })
 }

 const upscale = (cart = false, wi = false) => {
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
   setUpscaleAndAdd({ cart: true, wi: wi })
  }
 }

 const addToCart = async (addCartData: { up: boolean; imageUrl: string; productId: string; publicId: string; wi: boolean }) => {
  console.log('addCartData:', addCartData)
  const { up, imageUrl, productId, publicId, wi } = addCartData ? addCartData : { up: false, imageUrl: '', productId: '', publicId: '', wi: false }
  if (!generated.isUpscaled && !up) {
   if (selectedImage.generated.imgData.publicId === '') {
    toast.error('Please select an image to add to cart.')
    return
   } else {
    const cart = true
    const wi = generated.ff === 'wi'
    upscale(cart, wi)
    return
   }
  }
  if (wi) {
   window.location.replace(`${shop.primaryDomain.url}/products/${productId}?pid=${publicId}`)
   return
  }
  if (generated.ff === 'wi') {
   window.location.replace(`${shop.primaryDomain.url}/products/${generated.productId}?pid=${generated.imgData.publicId}`)
   return
  }
  if (!cartData.hasCart) {
   console.log('generated:', generated)
   const newCart = await createCart({
    merchandiseId: up ? productId : generated.productId,
    quantity: 1,
    attributes: [{ key: 'imageUrl', value: up ? imageUrl : generated.imgData.url }],
   })
   setCartData({
    cartId: newCart.id,
    hasCart: true,
   })
   router.push('?modal=cart')
  }
  if (cartData.hasCart) {
   const updatedCart = await addCartLine(cartData.cartId, {
    merchandiseId: up ? productId : generated.productId,
    quantity: 1,
    attributes: [{ key: 'imageUrl', value: up ? imageUrl : generated.imgData.url }],
   })
   setCartData({
    cartId: updatedCart.id,
    hasCart: true,
   })
   router.push('?modal=cart')
  }
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
