import React from 'react'
import Image from 'next/image'
import popac from '../public/pop.png'
import logo from '../public/logo0.png'
import nav from '../public/nav.jpg'
import NavIt from './navIt'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaShoppingCart, FaWindowClose } from 'react-icons/fa'
import { useRouter } from 'next/router'


const navBar = () => {
  //tried by chnaging file name to [navu] to use as slug in oreder to setActive(navu) to make have  
  // const router= useRouter();
  // var navu;
  // let i=0;
  // if(i==0){
  //   navu=router.pathname.slice(1)
  // }
  // i++
  let pageL = ["Plants", 'Seeds', 'Contact', "MyAccont"];
  // console.log(navu)
  // const [active, setActive] = useState(navu)
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
            <Image src={logo} alt='logo' className='w-12 rounded-md' ></Image>
          </Link>
          <div className='flex justify-center'>
            <div className={`bg-g-100  absolute top-2 justify-center p-10 opacity-90 ${pop ? 'right-0' : 'right-center'} ml-3 flex-row ${cartfun ? 'block' : 'hidden'} `}>
              <FaShoppingCart className='absolute top-1 right-center text-g-700  text-2xl right-12 hidden md:block'/>
              <div className='text-2xl'><h1>plants</h1>
                <ul className='text-sm text-center'>
                  <li>plant2</li>
                  <li>plant1</li>
                </ul>
              </div>
              <div className='text-2xl'><h1>seeds</h1>
                <ul className='text-sm text-center'>
                  <li>plant2</li>
                  <li>plant1</li>
                </ul>
              </div>
              <FaWindowClose onClick={(() => { setCartfun(false) })} className='cursor-pointer absolute top-2 right-2 ' />
            </div>
            <div>
              <FaShoppingCart onClick={(() => { setCartfun(true) })} className='cursor-pointer md:hidden absolute top-3 right-center text-g-700  text-2xl ' />
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
                  <Link href={`/${page.toLowerCase()}`} className='' ><NavIt key={page} active={active} page={page} setActive={setActive} /></Link>
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