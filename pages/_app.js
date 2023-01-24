import '@/styles/globals.css'
import Nav from '../components/navBar'
import Foot from '../components/footer'

export default function App({ Component, pageProps }) {


  return <>
    <Nav />
    <div className="min-h-screen grid grid-rows-1">
      <div className='m-5'>
      <Component {...pageProps}  />
      </div>
      <div className='bg-g-100'>
      <Foot className=' absolute  top-0 w-full mt-5' />
      </div>
    </div>
  </>
}
