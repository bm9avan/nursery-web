import '@/styles/globals.css'
import Nav from '../components/navBar'
import Foot from '../components/footer'
import React, { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {

  let cartObj
  const [cart, setCart] = useState({})

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        cartObj = JSON.parse(localStorage.getItem("data"))
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
    localStorage.setItem("data", JSON.stringify(cartup))
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
    <Nav cart={cart} addTOcart={addTOcart} clearCart={clearCart} removeFromCart={removeFromCart} />
    <div className="min-h-screen grid grid-rows-1">
      <div className='m-5'>
        <Component cart={cart} addTOcart={addTOcart} clearCart={clearCart} removeFromCart={removeFromCart} {...pageProps} />
      </div>
      <div className='bg-g-200'>
        <Foot className=' absolute  top-0 w-full mt-5' />
      </div>
    </div>
  </>
}
