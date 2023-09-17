'use client'

import { capitalizeFirstLetter } from 'lib/utils'
import useSheetStore, { DynamicData } from './sheet-store'
import { DataTableDemo } from './sheet-tanstack-table'
import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from 'components/ui/checkbox'
import { Button } from 'components/ui/button'
import { ArrowUpDown } from 'lucide-react'

export default function SheetTable() {
  const { csvData } = useSheetStore()
  if (!csvData.length) return null

  const headers = Object.keys(csvData[0])

  const csvColumns: ColumnDef<DynamicData>[] = headers.map((header) => ({
    accessorKey: header,
    accessorFn: (row) => row[header],

    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {capitalizeFirstLetter(header)}
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
  }))

  const columns: ColumnDef<DynamicData>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label='Select all'
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label='Select row'
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    ...csvColumns,
  ]

  return (
    <div className='mx-5 mt-4'>
      {/* <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header) => (
                <td key={header}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}

      <DataTableDemo columns={columns} data={csvData} />
    </div>
  )
}
