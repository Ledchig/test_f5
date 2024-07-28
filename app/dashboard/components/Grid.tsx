'use client'

import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import { Product } from '@/app/dashboard/page'
import { ColDef } from 'ag-grid-community'

const Grid = ({ products }: { products: Product[] }) => {
  const rowData: Product[] = products

  const colDefs: ColDef<Product, string>[] = [
    { field: 'name', sortable: true, filter: true, headerName: 'Наименование' },
    { field: 'sku', sortable: true, filter: true, headerName: 'Артикул' },
    { field: 'defaultBuyPrice', sortable: true, filter: true, headerName: 'Цена покупки' },
    { field: 'defaultSellPrice', sortable: true, filter: true, headerName: 'Цена продажи' },
  ]

  return (
    <div className="ag-theme-material h-96 w-full px-6">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  )
}

export default Grid
