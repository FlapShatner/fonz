import { useState, useEffect, useMemo } from 'react'
import { getNouns } from '../lib/compromise'
import { getProductsByTag } from '../storefront-api/products'
import { ShopifyProduct } from '../storefront-api/types'
import { useAtomValue } from 'jotai'
import { promptAtom, selectedFFAtom } from '../state/atoms'

async function useRecs() {
 const [recProds, setRecProds] = useState<ShopifyProduct | undefined>()
 const prompt = useAtomValue(promptAtom)
 const selectedFF = useAtomValue(selectedFFAtom)
 //  const { userQuery, productType } = queryObj
 const type = selectedFF.id === 'wi' ? 'Truck Back Window Graphics' : 'Vinyl Decal'
 const nouns: () => Promise<string[]> = async () => {
  const result: string[] = await getNouns({ userQuery: prompt })
  console.log(result)
  return result
 }
 const nounsArr = await nouns()
 function createSearchQuery(nounsArr: string[], productType: string) {
  const tagPart = nounsArr.map((noun) => `(tag:${noun})`).join(' OR ')
  const query = `${tagPart} AND (product_type:${productType})`
  console.log(query)
  return query
 }

 const recs = async () => {
  const query = createSearchQuery(nounsArr, type)
  const products = getProductsByTag(query)
  console.log(await products)
  return await products
 }
 setRecProds(await recs())

 return recProds
 //  return 'recs'
}

export default useRecs
