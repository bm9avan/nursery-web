import React, { useEffect } from 'react'
import Link from 'next/link'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import Product from "@/models/Product"
import mongoose from "mongoose";

const buyNow = ({ product, cart, addTOcart }) => {
  useEffect(() => {

  }, [cart])

  let proDetail = product
  let x = 0

  return (
    <div>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-g-900 ">Place Your Order</h1>
      <div className="h-1 w-20 bg-indigo-500 rounded mb-4"></div>
      <ol className='text-xl list-decimal'>
        {Object.keys(cart).map((c) => {
          let pos = proDetail.findIndex(item => item.slug === c);
          x += proDetail[pos].amount * cart[c].qty
          return <div key={c}>
            <li className='m-2 justify-center'>
              <Link href={`/product/${c}`} className="hover:bg-g-200">
                <div className='md:ml-16 float-left md:w-2/5 w-2/5 '>
                  {proDetail[pos].title}
                </div>
              </Link>
              <div className='float-right  flex'>
                <AiFillMinusCircle onClick={cart[c].qty > 1 ? (() => { addTOcart(c, -1) }) : (() => { addTOcart(c, 0) })} className='mx-2 mt-1 cursor-pointer' />
                <div>{cart[c].qty}</div>
                <AiFillPlusCircle onClick={(() => { addTOcart(c, 1) })} className='mx-2 mt-1 cursor-pointer' />
              </div>
              <div className=' m-auto '>Each ₹{proDetail[pos].amount}</div>
            </li>
          </div>
        })
        }
      </ol>
      <div className='text-2xl font-bold flex pt-4'>Total Amount : {x}</div>
      <div className='text-center pt-8'>
        <Link href='/address'><button className="group relative  md:w-1/5 justify-center rounded-md border border-transparent bg-g-600 py-2 px-4 text-sm font-medium text-white hover:bg-g-700 focus:outline-none focus:ring-2 focus:ring-g-500 focus:ring-offset-2 mr-8">PLACE ORDER</button></Link>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
  }
  let productArr = await Product.find()
  const product = JSON.parse(JSON.stringify(productArr))
  return {
    props: { product },
  }
}

export default buyNow