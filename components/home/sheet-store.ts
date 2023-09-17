import { create } from 'zustand'

export type DynamicData = { [key: string]: string | number | boolean }

type StoreProps = {
  csvData: DynamicData[]
  setCSVData: (data: DynamicData[]) => void
}

const useSheetStore = create<StoreProps>((set) => ({
  csvData: [],
  setCSVData: (data) => set({ csvData: data }),
}))

export default useSheetStore
