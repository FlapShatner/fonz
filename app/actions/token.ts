'use server'
import { cookies } from 'next/headers'

const shopId = process.env.NEXT_PUBLIC_SHOP_ID as string
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID as string
const clientSecret = process.env.CLIENT_SECRET as string
const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI as string
const credentials = btoa(`${clientId}:${clientSecret}`)

export const getToken = async (code: string) => {
 const body = new URLSearchParams()

 body.append('grant_type', 'authorization_code')
 body.append('client_id', clientId)
 body.append('redirect_uri', redirectUri)
 body.append('code', code as string)

 const headers = {
  'content-type': 'application/x-www-form-urlencoded',
  Authorization: `Basic ${credentials}`,
 }
 const response = await fetch(`https://shopify.com/${shopId}/auth/oauth/token`, {
  method: 'POST',
  headers: headers,
  body: body,
 })
 interface AccessTokenResponse {
  access_token: string
  expires_in: number
  id_token: string
  refresh_token: string
 }
 //  console.log('response', response)
 if (response.status !== 200) {
  return { status: 'error' }
 }
 const tokenObj = await response.json()
 //  console.log('tokenObj', tokenObj)
 cookies().set('authToken', JSON.stringify(await tokenObj))
 return { status: 'success' }
}

export const exchangeToken = async () => {
 const customerApiClientId = '30243aa5-17c1-465a-8493-944bcc4e88aa'
 const tokenCookie = cookies().get('authToken')?.value
 const tokenObj = tokenCookie && JSON.parse(tokenCookie)
 const accessToken = tokenObj.access_token
 const body = new URLSearchParams()
 body.append('grant_type', 'urn:ietf:params:oauth:grant-type:token-exchange')
 body.append('client_id', clientId)
 body.append('audience', customerApiClientId)
 body.append('subject_token', accessToken)
 body.append('subject_token_type', 'urn:ietf:params:oauth:token-type:access_token')
 body.append('scopes', 'https://api.customers.com/auth/customer.graphql')
 const headers = {
  'content-type': 'application/x-www-form-urlencoded',
  // Confidential Client
  Authorization: `Basic ${credentials}`,
 }
 const response = await fetch(`https://shopify.com/${shopId}/auth/oauth/token`, {
  method: 'POST',
  headers: headers,
  body,
 })
 interface AccessTokenResponse {
  access_token: string
  expires_in: number
 }
 if (response.status !== 200) {
  return { status: 'error' }
 }
 const { access_token } = await response.json()
 console.log('access_token', access_token)
 cookies().set('customerAccessToken', access_token)
 return { status: 'success' }
}

export const refreshToken = async () => {
 const tokenCookie = cookies().get('authToken')?.value
 const jsonCookie = tokenCookie && JSON.parse(tokenCookie)
 const refreshToken = jsonCookie.refresh_token
 const body = new URLSearchParams()
 body.append('grant_type', 'refresh_token')
 body.append('client_id', clientId)
 body.append('refresh_token', refreshToken)
 const headers = {
  'content-type': 'application/x-www-form-urlencoded',
  // Confidential Client
  Authorization: `Basic ${credentials}`,
 }
 const response = await fetch(`https://shopify.com/${shopId}/auth/oauth/token`, {
  method: 'POST',
  headers: headers,
  body,
 })
 interface AccessTokenResponse {
  access_token: string
  expires_in: number
  id_token: string
  refresh_token: string
 }
 if (response.status !== 200) {
  return { status: 'error' }
 }
 const tokenObj = await response.json()
 //  console.log('tokenObj', tokenObj)
 cookies().set('authToken', JSON.stringify(await tokenObj))
 return { status: 'success' }
}

export const logout = async () => {
 const tokenCookie = cookies().get('authToken')?.value
 const tokenObj = tokenCookie && JSON.parse(tokenCookie)
 const idToken = tokenObj.id_token
 const body = new URLSearchParams()
 body.append('id_token_hint', idToken)
 body.append('post_logout_redirect_uri', redirectUri)
 const response = await fetch(`https://shopify.com/${shopId}/auth/oauth/logout`)
}
