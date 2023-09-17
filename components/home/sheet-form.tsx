'use client'

import clsx from 'clsx'
import { useState } from 'react'
import Papa from 'papaparse'
import useSheetStore, { DynamicData } from './sheet-store'

export default function SheetForm() {
  const [file, setFile] = useState<File | null>(null)
  const [isError, setIsError] = useState<boolean>(false)
  const { setCSVData, csvData } = useSheetStore()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files ? event.target.files[0] : null
    setFile(uploadedFile)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!file) {
      setIsError(true)
      return
    }

    Papa.parse(file, {
      complete: (result) => {
        setCSVData(result.data as DynamicData[])
      },
      header: true,
      dynamicTyping: true,
    })
  }

  return (
    <form className='my-5' onSubmit={handleSubmit}>
      <label className='space-y-1 cursor-pointer'>
        <span className='text-sm font-semibold'>Select a .csv file</span>
        <input type='file' onChange={handleFileChange} accept='.csv' />
      </label>

      <button
        disabled={!file}
        className={clsx(
          'w-full transition-colors text-black py-2 rounded-md mt-7',
          !file ? 'bg-white/50' : 'bg-white',
        )}
      >
        Preview data
      </button>
    </form>
  )
}
