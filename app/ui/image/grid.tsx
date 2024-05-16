import React, { useEffect } from 'react'
import GridImage from './grid-image'
import { useAtom } from 'jotai'
import { generatedAtom, imageArrayAtom } from '@/app/state/atoms'
import { cld } from '@/app/lib/cloudinary'
import { crop } from '@cloudinary/url-gen/actions/resize'
import { compass } from '@cloudinary/url-gen/qualifiers/gravity'

function Grid() {
 const [generated] = useAtom(generatedAtom)
 const [imageArray, setImageArray] = useAtom(imageArrayAtom)
 useEffect(() => {
  const arr = () => {
   const transformations = {
    topleft: 'north_west',
    topright: 'north_east',
    btmleft: 'south_west',
    btmright: 'south_east',
   }

   return Object.entries(transformations).map(([key, value], i) => {
    const image = cld.image(generated.imgData.publicId)
    image
     .resize(crop().width(0.5).height(0.5).gravity(compass(value)))
     .quality('auto')
     .format('auto')
    return { id: i, label: key, image: image }
   })
  }
  setImageArray(arr)
 }, [generated])
 if (!generated) return null
 return (
  <div className='grid grid-cols-2 '>
   {imageArray.map((img) => (
    <GridImage
     key={img.id}
     img={img}
    />
   ))}
  </div>
 )
}

export default Grid
