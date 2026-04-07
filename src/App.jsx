import Navbar from './cmps/Navbar'
import Hero from './pages/Hero'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
