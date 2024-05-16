import type { VariantType } from './types/product-types'
import { decalPrompt } from './data/style-options'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: any[]) {
 return twMerge(clsx(inputs))
}

export const assemblePrompt = (prompt: string, style: string, ar?: string, idCode?: string) => {
 const fullPrompt = () => {
  if (prompt.endsWith('noprefix')) {
   return prompt
  } else {
   if (idCode == 'de1' || idCode == 'ts1') {
    return `${decalPrompt} ${style} ${prompt}`
   } else {
    return `${style} ${prompt} --ar ${ar}`
   }
  }
 }
 return fullPrompt()
}
