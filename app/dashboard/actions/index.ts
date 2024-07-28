'use server'

import { cookies } from 'next/headers'

export async function getProducts() {
  try {
    const cookieData = cookies().get('accessToken')?.value
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
        Authorization: `Bearer ${cookieData}`,
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
