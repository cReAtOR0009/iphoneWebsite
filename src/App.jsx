import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Features from './components/Features.jsx'
import HowItWorks from './components/How_works.jsx'
import Footer from '../../iphone/src/components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <Nav/>
    <Hero/>
    <Highlights/>
    <Model/>
    <HowItWorks/>
    <Features/>
    <Footer/>
   </main>
  )
}

export default App
