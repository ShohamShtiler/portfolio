import Navbar from './cmps/Navbar'
import Hero from './pages/Hero'
import SkillsStrip from './pages/SkillsStrip'
import Projects from './pages/Projects'
import About from './pages/About'
import './App.scss'

import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/600.css'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <SkillsStrip />
        <Projects />
        <About />
      </main>
    </div>
  )
}

export default App
