import Link from 'next/link';
import Navigation from './components/navigation.js';
import Head from 'next/head';
import Footer from './components/footer.js';


export default function Product() {
  return (
    
    <>
    <Head>
        <title>About Us</title>
    </Head>
    
    <Navigation/>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Footer/>
    </>
    
  )
}