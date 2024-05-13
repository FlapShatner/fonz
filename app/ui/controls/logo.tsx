import React from 'react'
import { AdvancedImage } from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { cld } from '@/app/lib/cloudinary'

function Logo() {
 const logoId = 'Fonzie_Logo_6in_PNG_xuwf99'
 const logoImg = cld.image(logoId).resize(fill().width(175))
 return (
  <AdvancedImage
   className='ml-2'
   cldImg={logoImg}
  />
 )
}

export default Logo
