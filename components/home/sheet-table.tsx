'use client'
import useSheetStore from './sheet-store'

export default function SheetTable() {
  const { csvData } = useSheetStore()
  if (!csvData.length) return null

  const headers = Object.keys(csvData[0])

  return (
    <div>
      <table>
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
      </table>
    </div>
  )
}
