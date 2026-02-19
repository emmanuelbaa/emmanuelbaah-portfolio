import { useState } from 'react'
import './App.css'
import "./index.css"

import { Loading } from './components/Loading'
import { Navbar } from './components/Navbar'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Project } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { MobileView } from './components/MobileView'

function App() {
  const [loading, setLoading] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {!loading && <Loading onComplete={() => setLoading(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 
        ${loading ? 'opacity-100' : 'opacity-0'} 
        bg-cyan-900 text-white`}
      >
        <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
        <MobileView navOpen={navOpen} setNavOpen={setNavOpen} />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  )
}

export default App
