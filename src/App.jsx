import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Slide from './components/Slide/Slide'
import Services from './components/Services/Services'
import Products from './components/Products/Products'
import Swipe from './components/Swipe/Swipe'
import Promo from './components/Promo/Promo'
import Deals from './components/Deals/Deals'
import Brands from './components/Brands/Brands'
import Details from './components/Details/Details'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Chatbox from './components/Chatbox/Chatbox'

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Slide />
      <Services />
      <Products />
      <Swipe />
      <Promo />
      <Deals />
      <Brands/>
      <Details />
      <Partners />
      <Footer />
      <Chatbox />
    </div>
  );
};

export default App
