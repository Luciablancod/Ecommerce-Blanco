import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Hero from './components/Hero'
import Footer from './components/Footer'


function App() {

  return(
    <>
      <NavBar />
      <Hero />      
      <ItemListContainer texto={"BIENVENIDO A MERCADO LIBRE "}/>
      <Footer />
    </>
  )
}

export default App
