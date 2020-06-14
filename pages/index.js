import Head from 'next/head'
import Link from 'next/link'
import Navigation from './components/navigation.js';
import ControlledCarousel from './components/slider.js';
import Boxes from './components/hpthreeboxes.js';
import AboutTextHP from './components/hpabout.js';
import Footer from './components/footer.js';
import TopInfo from './components/topinfo.js';

export default function Home() {
  return ( 
    
    <div>
      <TopInfo/>
     <div className="container-fluid"> 
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <ControlledCarousel />
      </div>
      <Boxes />
      <AboutTextHP />
      <Footer />
    </div>   
      
      

      
  )
}
