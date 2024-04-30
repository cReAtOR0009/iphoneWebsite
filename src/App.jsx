import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <Nav/>
    <Hero/>
    <Highlights/>
    <Model/>
   </main>
  )
}

export default App
