import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Layout from '../Common/Layout';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }) {
  console.log('pageProps',pageProps)
  return(
    <Layout footerstatus={pageProps.footerstatus}>
       <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
