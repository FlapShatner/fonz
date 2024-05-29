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
