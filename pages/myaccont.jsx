import Link from 'next/link'
import React from 'react'

const myaccont = () => {
  return (
    <>
      <div className=' text-center items-center mb-10'>
        please login
      </div>
      <div className=' text-center items-center'>
        <Link href='/login'><button className="group relative  w-1/3 justify-center rounded-md border border-transparent bg-g-600 py-2 px-4 text-sm font-medium text-white hover:bg-g-700 focus:outline-none focus:ring-2 focus:ring-g-500 focus:ring-offset-2 mr-8">login</button></Link>
        <Link href='/singup'><button className="group relative  w-1/3 justify-center rounded-md border border-transparent bg-g-600 py-2 px-4 text-sm font-medium text-white hover:bg-g-700 focus:outline-none focus:ring-2 focus:ring-g-500 focus:ring-offset-2">singup</button></Link>
      </div>
    </>
  )
}

export default myaccont