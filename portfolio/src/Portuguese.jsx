import Header from './components/Header'
import Hero from './components/Hero'
import AreasDeAtuacao from './components/AreasDeAtuacao'
import About from './components/About'
import Projetos from './components/Projetos'
import Eventos from './components/Eventos'
import Contato from './components/Contact'
import Footer from './components/Footer'
import { VideoProvider } from './context/videoContext.jsx'

const Portuguese = () => {
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

export default Portuguese;