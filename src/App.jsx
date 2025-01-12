import { Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Review from './pages/Review'
import AddReview from './pages/AddReview'
import { useState } from 'react'


function App() {
 


  return (
    <>
    <Header></Header>

    <Routes>
      <Route path='/' element={<Home />}/>
     
      <Route path='/review' element={<Review/>}/>
      <Route path='/addreview' element={<AddReview/>}/>
  </Routes>

    <Footer></Footer>
    
    </>
  )
}

export default App
