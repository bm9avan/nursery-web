import React from 'react'
import Link from 'next/link'

const plants = ({ proDetail }) => {
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
              {(Object.keys(proDetail)).slice(12).map((k) => {

                return <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={k}>
                  <Link href={`/product/${k}`} className="block relative h-80 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                  </Link>
                  <Link href={`/product/${k}`}>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{proDetail[k].catagy}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{proDetail[k].title}</h2>
                      <p className="mt-1">₹{proDetail[k].price}</p>
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

export default plants