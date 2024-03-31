import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AreasDeAtuacao from './components/AreasDeAtuacao'
import About from './components/About'
import Projetos from './components/Projetos'
import Eventos from './components/Eventos'
import Footer from './components/Footer'
import { VideoProvider } from './context/videoContext.jsx'


function App() {
  return (
    <VideoProvider>
        <Header/>
        <Hero/>
        <About/> 
        <AreasDeAtuacao/>
        <Projetos/>
        <Footer/>
    </VideoProvider>
  )
}

export default App

//<Eventos/>
// <Contato/>