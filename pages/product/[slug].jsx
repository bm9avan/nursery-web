import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Product from "@/models/Product"
import mongoose from "mongoose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const slug = ({ product, cart, addTOcart }) => {
  const [pro, setPro] = useState(product)
  useEffect(() => {
    setPro(product)
  }, [product[0]])

  const notify = () => toast.success('Success! Product added to cart ', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const router = useRouter()
  const { slug } = router.query
  const [pin, setpin] = useState()
  const onchnagePin = (e) => {
    setpin((e.target.value))
  }

  const [avilable, setAvilable] = useState('/')
  const delAib = async () => {
    var pinraw = await fetch(`/api/pinCode`);
    var pinarr = (await pinraw.json());
    if (pinarr.includes(parseInt(pin))) {
      setAvilable(true)
    } else {
      setAvilable(false)
    }
  }

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container  py-8 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product[0] === undefined ? "..." : (pro[0].categoty)}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product[0] === undefined ? "loading..." : (pro[0].title)}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-g-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-g-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-g-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-g-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-g-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex ml-6 items-center">
                  <div className="relative">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                    </svg>
                  </div>
                </div>
              </div>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">₹{pro[0] === undefined ? "..." : (product[0].amount)}</span>
                <button className="flex ml-auto text-white bg-g-500 border-0 py-2 md:px px-2 m-1 focus:outline-none hover:bg-g-600 rounded" onClick={slug === undefined ? () => { } : (() => { notify(); addTOcart(slug, 1) })}>Add to Cart</button>
                <Link href="/buyNow" className='flex ml-auto'>
                  <button className="text-white bg-g-500 border-0 py-2 px-6 m-1 focus:outline-none hover:bg-g-600 rounded" onClick={slug === undefined ? () => { } : (() => { cart[slug] ? addTOcart(slug, 0) : addTOcart(slug, 1) })}>Buy now</button>
                </Link>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex ">
                <input id='pinCode' placeholder='Enter PinCode' value={pin} onChange={onchnagePin} className="flex py-2 px-1 md:px-2 my-4 focus:outline-none bg-g-100 border-2 md:ml-0 w-44 md:w-64 border-g-600 rounded" />
                <button className="flex ml-auto text-white bg-g-500 border-0 py-2 px-1 md:px-6  my-4 focus:outline-none hover:bg-g-600 rounded mr-16" onClick={delAib}>Delivery Check</button>
              </div>
              <div>
                {!avilable && avilable != null && avilable != undefined && <span className='text-red-400 text-sm'>sorry! Delivery services are currently unavailable in your area.</span>}
                {avilable != '/' && avilable && avilable != null && <span className='text-g-500 text-sm'>yes, we do offer delivery to your location for this product.</span>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
  }
  let path = await context.req.url;
  let setPath = await path.slice(-3)

  let productArr = await Product.find({ slug: setPath })
  const product = JSON.parse(JSON.stringify(productArr))
  return {
    props: { product }
  }
}

export default slug