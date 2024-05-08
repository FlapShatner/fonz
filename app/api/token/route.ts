export async function POST(req: Request) {
 const data = await req.json()
 const { code, codeVerifier } = data
 const body = new URLSearchParams()
 const clientId = 'shp_59978d77-79bb-4247-914a-fb5b7624e008'
 const redirectUri = 'https://fonz.ink-dev.com/auth'
 body.append('grant_type', 'authorization_code')
 body.append('client_id', clientId)
 body.append('redirect_uri', redirectUri)
 body.append('code', code as string)
 // Public Client

 body.append('code_verifier', codeVerifier as string)
 const headers = {
  'content-type': 'application/x-www-form-urlencoded',
 }
 console.log('body', body)
 const response = await fetch(`https://shopify.com/58080919635/auth/oauth/token`, {
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
 console.log('response', response)
 const tokenObj = await response.json()
 //  console.log('tokenObj', tokenObj)

 return Response.json(await tokenObj)
}
