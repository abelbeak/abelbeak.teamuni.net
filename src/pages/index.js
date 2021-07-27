import * as React from "react"
import Navigation from "../components/Header"
import Footer from '../components/footer'
import Contact from "./Contact/Contact"
import './index.css'


function IndexPage() {
  return (
  <>
    <Navigation/>
    <div className="main-wrapper">
      <Contact/>
    </div>
    <Footer/>
  </>
  )
}

export default IndexPage
