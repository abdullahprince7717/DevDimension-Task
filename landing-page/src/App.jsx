import './App.css'
// import Navbar from './components/navbar'
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

    <div>
      <nav id="navbar-example2" className="navbar navbar-light bg-light px-5 py-3">
        <a className="navbar-brand" href="#">Navbar</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">What we do</a>
          </li>
          <li className="nav-item"><a className="nav-link" href="#scrollspyHeading3">Our work</a></li>
          <li className="nav-item"><a className="nav-link" href="#scrollspyHeading4">How it works</a></li>
          <button className="btn btn-outline-primary" type="submit">Get Started</button>
        </ul>
      </nav>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example">

        <div id="scrollspyHeading1">
          <QouteForm />
        </div>
        <div id="scrollspyHeading2">
          <Services />
        </div>
        <VideoSection />
        <div id="scrollspyHeading3">
          <LatestProjects />
        </div>
        <Benefits />
        <div id="scrollspyHeading4">
          <Features />
        </div>
        <Testimonials />
        <VideoSection />
        <RequestQuote />
        {/* <ContactUs /> */}
        <Footer />
      </div>
    </div>
  )
}

export default App
