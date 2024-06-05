export const createCartMutation = `
mutation($input: CartInput) {
  cartCreate(input: $input)
{
  cart {
    id
    createdAt
    updatedAt
    lines(first: 10){
      edges {
        node{
          id
          merchandise {
            ... on ProductVariant{
              id
            }
          }
        }
      }
    }
  }
}}`

export const addCartLineMutation = `
mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
    id
    createdAt
    updatedAt
    lines(first: 10){
      edges {
        node{
          id
          merchandise {
            ... on ProductVariant{
              id
            }
          }
        }
      }
    }
  }
    userErrors {
      field
      message
    }
  }
}
`
export const updateCartLineMutation = `
mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
   cart {
    id
    createdAt
    updatedAt
    lines(first: 10){
      edges {
        node{
          id
          merchandise {
            ... on ProductVariant{
              id
            }
          }
        }
      }
    }
  }
    userErrors {
      field
      message
    }
  }
}
`

export const removeCartLineMutation = `
mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
    cart {
    id
    createdAt
    updatedAt
    lines(first: 10){
      edges {
        node{
          id
          merchandise {
            ... on ProductVariant{
              id
            }
          }
        }
      }
    }
  }
    userErrors {
      field
      message
    }
  }
}
  `
