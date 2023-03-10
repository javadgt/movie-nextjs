
import Header from '@/components/header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='min-h-screen'>
        <Header/>
        {children}
      </body>
    </html>
  )
}
