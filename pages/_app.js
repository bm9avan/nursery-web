import '@/styles/globals.css'
import Nav from '../components/navBar'
import Foot from '../components/footer'
import React, { useState, useEffect } from 'react'
import Product from "@/models/Product"
import mongoose from "mongoose";

export default function App({ Component, pageProps }) {

  // var proDetail = [{
  //   "_id": "63f4740bb043657a8190dc55",
  //   "productId": "s01",
  //   "title": "Tomato Seeds",
  //   "slug": "s01",
  //   "img": "later",
  //   "categoty": "SEEDS",
  //   "amount": 59,
  //   "availableQty": 63,
  //   "__v": 0
  // }]
  // console.log("proDetails", proDetail, product)

  let cartObj
  const [cart, setCart] = useState({})

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        cartObj = JSON.parse(localStorage.getItem("data"))
        // console.log("new dis", cartObj)
        if (cartObj == null) {
          localStorage.setItem("data", JSON.stringify({}))
        }
        setCart(cartObj)
      } catch (error) {
        console.log(error)
        localStorage.clear()
      }
    }
  }, [])

  const [render, setRender] = useState(true)

  function saveCart(cartup) {
    // let t = cartPrice
    localStorage.setItem("data", JSON.stringify(cartup))
    Object.keys(cartup).forEach(Id => {
      console.log("id",Id)
      // let pos = proDetail.findIndex(item => item.slug === Id);
      // console.log("pos",pos)
      // t = cartup[Id].qty * proDetail[pos].amount
    });
    setRender(!render)
  }

  function addTOcart(proId, qty) {
    let newCart = cart
    if (newCart[proId] != undefined) {
      let oldQty = newCart[proId].qty
      newCart[proId].qty = oldQty + qty
    } else {
      newCart[proId] = { 'qty': qty }
    }
    setCart(newCart);
    saveCart(newCart);
  }

  function clearCart() {
    setCart({})
    cartObj = {}
    saveCart({})
  }

  function removeFromCart(proId) {
    let newCart = cart
    delete newCart[proId]
    setCart(newCart)
    saveCart(newCart)
  }

  return <>
    <Nav  cart={cart} addTOcart={addTOcart} clearCart={clearCart} removeFromCart={removeFromCart} />
    <div className="min-h-screen grid grid-rows-1">
      <div className='m-5'>
        <Component  cart={cart} addTOcart={addTOcart} clearCart={clearCart} removeFromCart={removeFromCart} {...pageProps} />
      </div>
      <div className='bg-g-200'>
        <Foot className=' absolute  top-0 w-full mt-5' />
      </div>
    </div>
  </>
}

// export async function getServerSideProps(context) {
//   if (!mongoose.connections[0].readyState) {
//     mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
//   }
//   let productArr = await Product.find({ categoty: "SEEDS" })
//   const product = JSON.parse(JSON.stringify(productArr))
//   return {
//     props: { product },
//   }
// }

// MyApp.getInitialProps = async (appContext) => {
//   // Fetch data from Mongoose here
//   const datain = await fetch("http://192.168.0.107:3000/api/hello");
//   const data= await datain.json();
//   // Get the component props
//   const appProps = await MyApp.getInitialProps(appContext);
  
//   // Return the merged props
//   return { ...appProps, data };
// };

// export default MyApp