import SheetForm from "components/home/sheet-form";


export default function Page() {
  
  return (
    <section className='min-h-screen flex items-start'>
      <div className='w-80 bg-black m-3 py-5 px-4 rounded-md shadow-sm'>
        <h1 className='font-semibold text-2xl'>Sheet data previewer</h1>

        <SheetForm/>

      </div>
      <div className='bg-red-100 flex-1 min-h-screen'>
       
      </div>
    </section>
  )
}
