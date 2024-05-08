import { client } from '../../lib/shopify-client'

const GRAPHQL_QUERY = `
  query {
    shop {
      name
    }
  }
`

export async function GET() {
 const response = await fetch(client.getStorefrontApiUrl(), {
  body: JSON.stringify({
   query: GRAPHQL_QUERY,
  }),
  // Generate the headers using the private token.
  headers: client.getPrivateTokenHeaders(),
  method: 'POST',
 })
 if (!response.ok) {
  throw new Error(response.statusText)
 }

 const { data } = await response.json()

 return Response.json({ data })
}
