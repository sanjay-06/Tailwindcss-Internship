import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ChooseYourMs from './components/Choose'
import Section2 from './components/section2'
import GamePass from './components/GamePass'
import Section3 from './components/section3'
import MSResponse from './components/Response'
import ThisHoliday from './components/Holiday'
import Social from './components/social'
import Footer from './components/Footer'
import Showcase from './pages/microsoft_page/Showcase'
import LearnMore from './pages/microsoft_page/LearnMore'
import Video from './pages/microsoft_page/Video'
import ShowcaseOffice from './pages/office_page/ShowcaseOffice'
import OfficeGrid from './pages/office_page/OfficeGrid'
import MsGrid from './pages/office_page/MsGrid'
import Faqs from './pages/office_page/Faqs'

function App() {
  return (
    <>
      <Header />
        <Hero />
        <ChooseYourMs />
        <Section2 />
        <GamePass />
        <Section3 />
        <MSResponse />
        <ThisHoliday />

      
        <Showcase />
        <Video />
        <LearnMore />


        <ShowcaseOffice />
        <MsGrid />
        <OfficeGrid />
        <LearnMore />
        <Faqs />

      <Social />
      <Footer />
  </>
  )
}

export default App
