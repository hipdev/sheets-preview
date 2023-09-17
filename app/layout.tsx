import '@/styles/globals.css'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Sheets challenge',
  description: 'Sheets challenge with Next.js, Tailwind CSS, Jest and TypeScript',
  themeColor:'black',
  colorScheme:'dark',
  
}
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>

      <body className='bg-neutral-800'>{children}</body>
    </html>
  )
}
