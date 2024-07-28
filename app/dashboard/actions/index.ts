'use server'

import { cookies } from 'next/headers'

export const getProducts = async () => {
  try {
    const query = `
        query {
            products {
                id
                name
                sku
                defaultBuyPrice
                defaultSellPrice
            }
        }
    `
    const url = 'https://proplan.work/graphql'

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
      },
      body: JSON.stringify({ query }),
    })

    const { data } = await res.json()
    return { products: data.products }
  } catch (err) {
    console.log(err)
    return { error: 'Failed to get products' }
  }
}
