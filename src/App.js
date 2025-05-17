
import { useState, useEffect } from 'react';
import './App.css';
import DontMiss from './components/dontMiss';
import EventFunc from './components/eventFunc';
import OurServices from './components/ourService';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import FAQ from './components/FAQ';
import Contact from './components/CONT';
import Intro from './components/intro';
import Domains from './components/domains';
import Coordinators from './components/coordinators';
import UpcomingEvents from './components/UpcomingEvents';
import BG from './BG.mp4';
import introVideo from './introVideo.mp4';
import LoadingPage from './components/LoadingPage';
import axios from 'axios';


function App() {

  const [cards, setcards] = useState([])
  const [domains, setdomains] = useState([])

  const observerToptoDown = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add('fade-inAnimation')

      } else {
        entry.target.classList.remove('fade-inAnimation')
      }

    })
  })

  useEffect(() => {
    const card = document.querySelectorAll(".card ")
    const domain = document.querySelectorAll(".flip-card")
    setcards(card)
    setdomains(domain)

  }, [])

  useEffect(()=>{
    
if (window.confirm('Parametric Department recruitment is now open! Apply now to be a part of our creative tech team. \n (click OK to open recruitment form)'))
   {
   window.open('https://forms.gle/K4KxDwo1vVzUze7r9', '_blank');
   };
    
  },[])

  useEffect(() => {
    cards.forEach(el => {
      observerToptoDown.observe(el)
    })
    domains.forEach(el => {
      observerToptoDown.observe(el)
    })
  })

  return (
    <div className="App">
      {/* <LoadingPage />  */}
      <video className="background-video" autoPlay loop muted>
        <source src={BG} type="video/mp4" />
      </video>
      <div className="background-layer" data-theme="dark" ></div>
      <div className='containComponents'>
      <video id='introVideo'  className='introVideo' autoPlay muted>
          <source src={introVideo}/>
       </video>
        <NavBar />
        <HomePage />
        <Intro />
        <Domains />
        <UpcomingEvents />
        <EventFunc />
        <DontMiss />
        <OurServices />
        <Coordinators />
        <FAQ />
        <Contact />
      </div>
    </div>
  );
}

export default App;

