import '@/styles/globals.css'
import Nav from '../components/navBar'

export default function App({ Component, pageProps }) {
  
  
  return <>
  <Nav/>
  <Component {...pageProps} />
  </>
}
