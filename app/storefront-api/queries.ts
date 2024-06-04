export const productQuery = `
query MyQuery($identifiers: [HasMetafieldsIdentifier!] = {namespace: "custom", key: ""}, $handle: String = "") {
  product(handle: $handle) {
    handle
    title
    options(first:40){
      id
      name
      values
    }
    variants(first: 36) {
      edges {
        node {
          id
          title
          selectedOptions {
            name
            value
          }
          price {
            amount
          }
          metafields(identifiers: $identifiers) {
            id
            key
            value
          }
        }
      }
    }
    id
  }
}
`
export const productVariantQuery = `
query MyQuery($id:ID!) {
  node(id: $id) {
    ... on ProductVariant {
      id
      selectedOptions {
        name
        value
      }
      title
      price {
        amount
      }
      product {
        handle
        title
        id
      }
    }
  }
}
`
export const getCartQuery = `
query ($id:ID!){
  cart(id:$id) {
    id
    createdAt
    updatedAt
    lines(first: 10) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              selectedOptions {
                name
                value
              }
              product{
                id
                title
              }
            }
          }
          attributes {
            key
            value
          }
        }
      }
    }
    attributes {
      key
      value
    }
    checkoutUrl
    cost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
      totalDutyAmount {
        amount
        currencyCode
      }
    }
   
  }
}
`
