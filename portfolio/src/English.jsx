import Header from './components_english/Header'
import Hero from './components_english/Hero'
import AreasDeAtuacao from './components_english/AreasDeAtuacao'
import About from './components_english/About'
import Projetos from './components_english/Projetos'
import Eventos from './components_english/Eventos'
import Contato from './components_english/Contact'
import Footer from './components_english/Footer'
import { VideoProvider } from './context/videoContext.jsx'

const English = () => {
    return (
        <>
        <VideoProvider>
          <Header/>
          <Hero/>
          <About/>
          <AreasDeAtuacao/>
          <Projetos/>
          <Eventos/>
          <Contato/>
          <Footer/>
        </VideoProvider>
        </>
      )
}

export default English;