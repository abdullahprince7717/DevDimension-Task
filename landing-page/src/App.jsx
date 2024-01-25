import './App.css'
import Navbar from './components/navbar'
import QouteForm from './components/form'
import Services from './components/services'
import VideoSection from './components/videoSection'
import LatestProjects from './components/latestProjects'
import Testimonials from './components/testimonials'
import Benefits from './components/benefits'
import Features from './components/features'
import RequestQuote from './components/requestQuote'
// import ContactUs from './components/contactUs'
import Footer from './components/footer'
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
      <RequestQuote />
      {/* <ContactUs /> */}
      <Footer />
    </div>
  )
}

export default App
