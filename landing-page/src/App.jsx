import './App.css'
import Navbar from './components/navbar'
import QouteForm from './components/form'
import Services from './components/services'
import VideoSection from './components/videoSection'
import LatestProjects from './components/latestProjects'
import Testimonials from './components/testimonials'
import Benefits from './components/benefits'
import Features from './components/features'
function App() {

  return (
    <div className="">
      <Navbar />
      <QouteForm />
      <Services />
      <VideoSection />
      <LatestProjects />
      <Testimonials />
      <Benefits />
      <Features />
    </div>
  )
}

export default App
