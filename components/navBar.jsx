import React from 'react'
import Image from 'next/image'
import popac from '../public/pop.png'
import logo from '../public/logo0.png'
import nav from '../public/nav.jpg'
import NavIt from './navIt'
import { useEffect,useState } from 'react'
import Link from 'next/link'


const navBar = () => {
    let pageL = ["Plants", 'Seeds', 'Cart','Contact',"MyAccont"]
  const [active, setActive] = useState(pageL[0])
  const [pop, setPop] = useState(false)
  useEffect(() => {
    const handleScreenSize = () => {
      if (window.innerWidth >= 768) {
        setPop(true);
      }else{
        setPop(false);
      }
    };
    handleScreenSize();
    window.addEventListener('resize', handleScreenSize);
    return () => window.removeEventListener('resize', handleScreenSize);
  }, []);
  return (
    <div><nav className="bg-g-400 md:grid md:grid-cols-2 md: items-center">
    <div className="flex justify-between items-center">
      <Link href='/'>
      <Image src={logo} alt='logo' className='w-12 rounded-md' ></Image>
      </Link>
      <button onClick={(() => { setPop(!pop) })} className="md:hidden">
        {pop ? <Image src={popac} alt='pop image' className='w-12 p-2 hover:bg-g-50 hover:opacity-50 rounded-md '></Image> :

          <Image src={nav} alt='nav icon' className='w-12 p-2 hover:bg-g-50 hover:opacity-50 rounded-md'></Image>
        }
      </button>
    </div>
    <div className='text-center mt-0 mb-0 m-4 md:items-center '>
      <div className='md:flex md:justify-between '>
      {pop&&
        pageL.map((page) => {
          return <Link href={`/${page.toLowerCase()}`}><NavIt key={page}  active={active} page={page} setActive={setActive} /></Link>
        })
      }
      </div>
    </div>
  </nav></div>
  )
}

export default navBar