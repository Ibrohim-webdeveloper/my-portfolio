import './App.css'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Hire from './components/Hire'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[]);

  return (
    <div className="App">
      <section id="home" ><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="hire-me"><Hire /></section>
      <section><Footer /></section>
    </div>
  )
}

export default App