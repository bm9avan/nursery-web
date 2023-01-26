import React from 'react'
import { useRouter } from 'next/router'

const slug = () => {
    const router = useRouter();
    console.log(router.query)
      const {val}=router.query
  return (
    <div>{val}</div>
  )
}

export default slug