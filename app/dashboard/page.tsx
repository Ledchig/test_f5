import { getProducts } from './actions'
import Grid from './components/Grid'
export interface Product {
  id: number
  name: string
  sku: string
  defaultBuyPrice: string
  defaultSellPrice: string
}

export const dynamic = 'force-dynamic'

export default async function Dashboard() {
  const { products } = await getProducts()

  return (
    <div className="mx-auto my-24 flex max-w-[1000px] flex-col items-center justify-center gap-12 border p-12 shadow-2xl">
      <h1 className="text-xl font-semibold">Продукты</h1>
      <Grid products={products} />
    </div>
  )
}
