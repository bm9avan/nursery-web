import '@/styles/globals.css'
import Nav from '../components/navBar'
import Foot from '../components/footer'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {

  let cartObj
  const [cart, setCart] = useState({})
  const [user, setUser] = useState({ val: null })
  const [key, setKey] = useState({ val: null })
  const [progress, setProgress] = useState(0)

  let router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
    let token = JSON.parse(localStorage.getItem("token"))
    if (token) {
      token.val && setUser({ val: token.val })
      setKey(Math.random())
    }
  }, [router.query])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        cartObj = JSON.parse(localStorage.getItem("data"))
        if (cartObj == null) {
          localStorage.setItem("data", JSON.stringify({}))
          cartObj = JSON.parse(localStorage.getItem("data"))
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

  function logout() {
    setUser({ val: null })
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
    <LoadingBar
      color='#00e64d'
      progress={progress}
      waitingTime={400} 
      onLoaderFinished={() => setProgress(0)}
    />
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
