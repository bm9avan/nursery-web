import React from 'react'
import Image from 'next/image'
import popac from '../public/pop.png'
import logo from '../public/logo0.png'
import nav from '../public/nav.jpg'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaShoppingCart, FaWindowClose } from 'react-icons/fa'
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlineClose } from 'react-icons/ai'
import { useRouter } from 'next/router'

const navBar = ({ proDetail, cart, addTOcart, clearCart, removeFromCart, cartPrice }) => {
  useEffect(() => {
    // This will be called when either prop1 or prop2 changes
  }, [cart, cartPrice])
  console.log("navBar cart", cart)
  /*
  const router= useRouter();
  useEffect(() => {
    setActive(router.pathname.slice(1))
    console.log("hi",active,"-val")
  }, [router.pathname.slice(1)])
  */
  /*
  //tried by chnaging file name to [navu] to use as slug in oreder to setActive(navu) to make have  
  const router= useRouter();
  var navu;
  let i=0;
  if(i==0){
    navu=router.pathname.slice(1)
  }
  i++
  console.log(navu)
  const [active, setActive] = useState(navu)
  */
  let pageL = ["Plants", 'Seeds', 'Contact', "MyAccont"];
  const [active, setActive] = useState('')
  const [pop, setPop] = useState(false);

  useEffect(() => {
    const handleScreenSize = () => {
      if (window.innerWidth >= 768) {
        setPop(true);
      } else {
        setPop(false);
      }
    };
    handleScreenSize();
    window.addEventListener('resize', handleScreenSize);
    return () => window.removeEventListener('resize', handleScreenSize);
  }, []);
  const [cartfun, setCartfun] = useState(false)
  return (
    <div className='shadow-xl sticky top-0 z-10'>
      <nav className="bg-g-400 md:grid md:grid-cols-2 md:items-center">
        <div className="flex justify-between items-center">
          <Link href='/' onClick={() => { setActive("no") }}>
            <Image src={logo} alt='logo' className='w-12 rounded-2xl m-1' ></Image>
          </Link>
          <div className='flex justify-center '>
            <div className={`bg-g-100  absolute w-4/5  md:w-1/4 top-2 justify-center p-10 opacity-90 ${pop ? 'right-0' : 'right-center'} ml-1 flex-row ${cartfun ? 'block' : 'hidden'} rounded-2xl z-30 `}>
              <FaShoppingCart className='absolute top-1 right-1/2 text-g-700  text-2xl  hidden md:block' />
              <div className='text-2xl'><h1 className=' font-bold text-center'>plants&seeds</h1>
              {/* <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aliquam aliquid ipsa itaque alias labore fugit, in, optio at ipsum architecto quae cupiditate rem, animi quo esse! Aspernatur illum pariatur cupiditate laborum iusto? Nobis, hic in! Quae odio quia ab tempore! In nisi a, quasi error excepturi vel fuga laborum rem, ipsam, explicabo ad qui maxime recusandae. Praesentium quibusdam non, modi tempore eius, perferendis voluptates tempora consequuntur, est dignissimos ipsam atque soluta laudantium neque fugit! Aliquid, qui in error doloremque sunt iusto excepturi eveniet a dolore maxime eos eaque atque, tempore asperiores ipsam, mollitia ratione doloribus distinctio aut recusandae.</div> */}
                <ul className='text-sm text-center'>
                  {Object.keys(cart).map((c) => {
                    return <div key={c}>
                      <li className='flex  m-2 '>
                        <div className='float-left w-full'>
                          {proDetail[c].title}
                        </div>
                        <div className='float-right flex'>
                          <AiFillMinusCircle onClick={cart[c].qty > 1 ? (() => { addTOcart(c, -1) }) : (() => { addTOcart(c, 0) })} className='mx-2 mt-1 cursor-pointer' />
                          <div>{cart[c].qty}</div>
                          <AiFillPlusCircle onClick={(() => { addTOcart(c, 1) })} className='mx-2 mt-1 cursor-pointer' />
                          <AiOutlineClose onClick={() => { removeFromCart(c); setCartfun(!cartfun) }} className='mx-2 mt-1 cursor-pointer' />
                        </div>
                      </li>
                    </div>
                  })
                  }
                </ul>
                {/* {Object.keys(cart) != 0 && <div className='text-center'>
                  Total:{cartPrice}
                </div>} */}
                {Object.keys(cart) != 0 && <div className='text-xl flex flex-row justify-between m-7'>
                  <button className='group relative flex justify-center rounded-md border border-transparent bg-g-600 py-2 px-4 text-sm font-medium text-white hover:bg-g-700 focus:outline-none focus:ring-2 focus:ring-g-500 focus:ring-offset-2' onClick={()=>{clearCart();setCartfun(!cartfun)}}>Clear Cart</button>
                  <Link href="/buyNow">
                  <button className='group relative flex justify-center rounded-md border border-transparent bg-g-600 py-2 px-4 text-sm font-medium text-white hover:bg-g-700 focus:outline-none focus:ring-2 focus:ring-g-500 focus:ring-offset-2' onClick={()=>setCartfun(!cartfun)} >Buy now</button>
                  </Link>
                </div>}
                {console.log("length", Object.keys(cart).length)}
                {Object.keys(cart).length === 0 && <div className='flex justify-center mt-3 text-xl'>
                  {'Your cart is empty :('}
                </div>}
              </div>

              <FaWindowClose onClick={(() => { setCartfun(false) })} className='cursor-pointer absolute top-4 right-4 text-xl' />
            </div>
            <div>
              <FaShoppingCart onClick={(() => { setCartfun(true) })} className='cursor-pointer md:hidden absolute top-3 right-center text-g-700  text-2xl z-30' />
            </div>
          </div>
          <button onClick={(() => { setPop(!pop) })} className="md:hidden hover:bg-g-50 hover:opacity-50 rounded-md">
            {pop ? <Image src={popac} alt='pop image' className='w-12 p-2 opacity-100'></Image> :

              <Image src={nav} alt='nav icon' className='w-12 p-2 opacity-100'></Image>
            }
          </button>
        </div>
        <div className='text-center mt-0 mb-0 m-4 md:items-center '>
          <div className='md:flex md:justify-between items-center'>
            {pop &&
              pageL.map((page) => {
                return <div key={page}>
                  <Link href={`/${page.toLowerCase()}`} className='' key={`/${page.toLowerCase()}`}><button onClick={() => { setActive(page) }} key={page.toLowerCase()} className={`w-full p-2 hover:bg-g-50 rounded-md text-xl hover:opacity-50 text-g-900 ${active === page ? 'text-red-900 font-bold' : ''} ${active === page ? 'text-red-900 font-bold' : ''}`}>
                    {page}
                  </button></Link>
                </div>
              })
            }
            {pop &&
              <FaShoppingCart onClick={(() => { setCartfun(true) })} className={`cursor-pointer hidden md:block text-2xl text-g-700 }`} />
            }
          </div>
        </div>
      </nav>
      <div>

      </div>
    </div>
  )
}

export default navBar