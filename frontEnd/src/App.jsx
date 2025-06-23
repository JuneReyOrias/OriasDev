
import './App.css'
import Footer from './Components/footer'
import Navbar from './Components/Navbar'
import About from './FrontEnd/About'
import Contact from './FrontEnd/Contact'
import Home from './FrontEnd/Home'
import Projects from './FrontEnd/Projects'
import Roles from './FrontEnd/Roles'
import Services from './FrontEnd/Services'
import TechStack from './FrontEnd/TechStack'

function App() {
 

  return (
   <>
 
    <Navbar/>
      <main className="pt-1 bg-gray-800">
        <Home/>
        <Roles/>
        <TechStack/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
         

    <Footer/>
      </main>



   </>
  )
}

export default App
