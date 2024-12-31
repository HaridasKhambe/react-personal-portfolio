import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar  from './Components/Navbar/navbar'
import Home from './Components/Home/home'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact' 
import Footer from './Components/Footer'
import About from './Components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Home />
     <About />
     <Experience />
     <Projects />
     <Contact/>
     <Footer/>


    </>
  )
}

export default App
