import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AreasDeAtuacao from './components/AreasDeAtuacao'
import About from './components/About'
import Projetos from './components/Projetos'
import Eventos from './components/Eventos'
import Contato from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <head>
      <title>My Portfolio</title>
    </head>
    
    <Header/>
    <Hero/>
    <About/>
    <AreasDeAtuacao/>
    <Projetos/>
    <Eventos/>
    <Contato/>
    <Footer/>
    </>
  )
}

export default App
