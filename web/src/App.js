import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Pages
import Home from "./pages/Home"
import PetDetails from "./pages/PetDetails"
import PetListing from "./pages/PetListing"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<PetListing />} />
            <Route path="/pets/:id" element={<PetDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

