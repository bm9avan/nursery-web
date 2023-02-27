import React from 'react'
import Link from 'next/link'
import Product from "@/models/Product"
import mongoose from "mongoose";

const plants = ({  product }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-8 mx-auto">
          <div className="flex flex-wrap w-full ">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-g-900">Bringing Nature to Your Doorstep</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Buy from us and discover the difference in quality, with plants that are hand-picked and carefully nurtured to ensure they thrive in your home or garden.</p>
          </div>
        </div>


        <section className="text-gray-600 body-font">
          <div className="container  px-5 py-14 mx-auto">
            <div className="flex flex-wrap -m-4">
              {(Object.keys(product)).map((k) => {
                  // if(product[k].categoty==="PLANT")
                return <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={k}>
                  <Link href={`/product/${product[k].slug}`} className="block relative h-80 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                  </Link>
                  <Link href={`/product/${product[k].slug}`}>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product[k].categoty}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{product[k].title}</h2>
                      <p className="mt-1">₹{product[k].amount}</p>
                    </div>
                  </Link>
                </div>
              })
              }
            </div>
          </div>
        </section>
      </section>

    </div>
  )
}

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
  }
  let productArr = await Product.find({categoty:"PLANT"})
  const product=JSON.parse(JSON.stringify(productArr))
  return {
    props: {product}, 
  }
}

export default plants