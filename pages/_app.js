import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../styles/team.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Navbar programs={pageProps.programs} />
    <Component {...pageProps} />
  </>
  )

}

export default MyApp
