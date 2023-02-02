import React from 'react'
import Image from 'next/image'
import popac from '../public/pop.png'
import logo from '../public/logo0.png'
import nav from '../public/nav.jpg'
import CartIt from './cartIt'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaShoppingCart, FaWindowClose } from 'react-icons/fa'
import { useRouter } from 'next/router'


const navBar = () => {
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
    <div className='shadow-xl'>
      <nav className="bg-g-400 md:grid md:grid-cols-2 md:items-center">
        <div className="flex justify-between items-center">
          <Link href='/' onClick={() => { setActive("no") }}>
            <Image src={logo} alt='logo' className='w-12 rounded-2xl m-1' ></Image>
          </Link>
          <div className='flex justify-center '>
            <div className={`bg-g-100  absolute w-4/5 h-4/5 md:w-1/4 top-2 justify-center p-10 opacity-90 ${pop ? 'right-0' : 'right-center'} ml-1 flex-row ${cartfun ? 'block' : 'hidden'} rounded-2xl z-20`}>
              <FaShoppingCart className='absolute top-1 right-1/2 text-g-700  text-2xl  hidden md:block'/>
              <div className='text-2xl'><h1 className=' font-bold'>plants</h1>
                <ul className='text-sm text-center'>
                  <CartIt/>
                  <CartIt/>
                </ul>
              </div>
              <div className='text-2xl'><h1>seeds</h1>
                <ul className='text-sm text-center'>
                <CartIt/>
                  <CartIt/>
                </ul>
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
                return <>
                  <Link href={`/${page.toLowerCase()}`} className='' ><button onClick={()=>{setActive(page)}} className={`w-full p-2 hover:bg-g-50 rounded-md text-xl hover:opacity-50 text-g-900 ${active===page ?'text-red-900 font-bold':''}`}>
      {page}  
    </button></Link>
                </>
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