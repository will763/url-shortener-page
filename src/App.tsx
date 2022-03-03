import React from "react"
import AdvancedStatistics from "./components/AdvancedStatistics"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Illustration from "./components/Illustration"
import Intro from "./components/Intro"
import Main from "./components/Main"
import Sample from "./components/Sample"
import ShortenerLink from "./components/ShortenerLink"



function App() {

  return (
    <React.Fragment>
    <Header />
    <Main />
    <ShortenerLink />
    <AdvancedStatistics />
    <Sample />
    <Footer />
    </React.Fragment>
  )
}

export default App
