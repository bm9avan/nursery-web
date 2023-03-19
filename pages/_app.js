import '@/styles/globals.css'
import Nav from '../components/navBar'
import Foot from '../components/footer'
import React, { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {

  let cartObj
  const [cart, setCart] = useState({})
  const [user, setUser] = useState({val: null})
  const [key, setKey] = useState({val: null})

  useEffect(() => {
    let token = localStorage.getItem("token")
    if(token){
        token && setUser({val: token})
        console.log(token, user)
      setKey(Math.random())
    }
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

  function logout(){
    setUser({val: null})
    // if i print user in myaccont, when token is null then null whould be set as string so even when token is not there i was geting logout button, if i wanted to avoid this i used localStorage.clear("token") this was clearing all thing in localStorage
    localStorage.setItem("token", null)
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
    <Nav key={key} user={user} cart={cart} addTOcart={addTOcart} clearCart={clearCart} removeFromCart={removeFromCart} />
    <div className="min-h-screen grid grid-rows-1">
      <div className='m-5'>
        <Component key={key} user={user} logout={logout} cart={cart} addTOcart={addTOcart} clearCart={clearCart} removeFromCart={removeFromCart} {...pageProps} />
      </div>
      <div className='bg-g-200'>
        <Foot className=' absolute  top-0 w-full mt-5' />
      </div>
    </div>
  </>
}
