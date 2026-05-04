import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ToptoBottom from './Components/ToptoBottom'

import Home from './Pages/Home'
import Trekking from './Pages/Trekking'
import Tours from './Pages/Tours'
import Activities from './Pages/Activities'
import About from './Pages/About'
import Contact from './Pages/Contact'
import TrekkingPage from './Pages/TrekkingPage'
import ActivitiesPage from './Pages/ActivitiesPage'
import TourPage from './Pages/TourPage'
// import BookNow from './Components/BookNow'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToptoBottom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trekkings/:slug" element={<Trekking />} />
        <Route path="/tours/:slug" element={<Tours />} />
        <Route path="/activities/:slug" element={<Activities />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trekking" element={<TrekkingPage/>} />
        <Route path="/activity" element={<ActivitiesPage/>} />
        <Route path="/tours" element={<TourPage/>} />
        {/* <Route path="/booknow" element={<BookNow />} /> */}
     
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App