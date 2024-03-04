import './App.css'
import { useContext } from 'react';
import { LanguageContext } from './context/languageContext'
import Portuguese from './Portuguese';
import English from './English';

function App() {
  const { Language } = useContext(LanguageContext);

  if(Language == "Portuguese") {
    return (
      <Portuguese/>
    )
  }
  if(Language == "English") {
    return (
      <English/>
    )
  }
  
  
  
}

export default App
