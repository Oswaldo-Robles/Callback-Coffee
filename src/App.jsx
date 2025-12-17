import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/HomePage'
import Menu from './pages/MenuPage'
import Contacto from './pages/ContactoPage'
import './App.css'


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
