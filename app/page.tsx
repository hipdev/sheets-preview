import SheetForm from 'components/home/sheet-form'
import SheetTable from 'components/home/sheet-table'

export default function Page() {
  return (
    <section className='min-h-screen flex items-start justify-center flex-col'>
      <div className='w-80 md:mx-auto mx-5  bg-black mt-5 py-5 px-4 rounded-md shadow-sm text-white'>
        <h1 className='font-semibold text-2xl'>Sheet data previewer</h1>

        <SheetForm />
      </div>
      <div className='flex-1'>
        <SheetTable />
      </div>
    </section>
  )
}
