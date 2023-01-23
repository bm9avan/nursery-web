import React from 'react'

const navIt = ({active,page,setActive}) => {
  return (
    <button onClick={()=>setActive(page)} className={`w-full p-2 hover:bg-g-50 rounded-md text-xl hover:opacity-50 text-g-900 ${active===page ?'text-red-900 font-bold':''}`}>
        {page}
    </button>
  )
}

export default navIt
