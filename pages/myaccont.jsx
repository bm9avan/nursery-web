import Link from 'next/link'
import React, { useEffect } from 'react'

const myaccont = ({ user, logout }) => {
  useEffect(() => {

  }, [user])

  return (
    <>
      {!user.val && <div className=' text-center items-center mb-10'>
        please login
      </div>}
      {!user.val && <div className=' text-center items-center'>
        <Link href='/login'><button className="group relative w-1/3 justify-center rounded-md border border-transparent bg-g-600 py-2 px-4 text-sm font-medium text-white hover:bg-g-700 focus:outline-none focus:ring-2 focus:ring-g-500 focus:ring-offset-2 mr-8">login</button></Link>
        <Link href='/signup'><button className="group relative w-1/3 justify-center rounded-md border border-transparent bg-g-600 py-2 px-4 text-sm font-medium text-white hover:bg-g-700 focus:outline-none focus:ring-2 focus:ring-g-500 focus:ring-offset-2">singup</button></Link>
      </div>}
      {user.val && <div className="flex justify-center">You have loged in</div>}
      {user.val && <>
        <div>
          <Link href='/orders' className="flex justify-center justify-self-center"><button className="group relative w-1/3 justify-center rounded-md border border-transparent bg-g-600 py-2 px-4 text-sm font-medium text-white hover:bg-g-700 focus:outline-none focus:ring-2 focus:ring-g-500 focus:ring-offset-2 mr-8 mt-5 ">My Orders</button></Link>
        </div>
        <div className="flex justify-center justify-self-center"><button onClick={logout} className="group relative w-1/3 justify-center rounded-md border border-transparent bg-g-600 py-2 px-4 text-sm font-medium text-white hover:bg-g-700 focus:outline-none focus:ring-2 focus:ring-g-500 focus:ring-offset-2 mr-8 mt-5 ">logout</button></div>
      </>}
    </>
  )
}

export default myaccont