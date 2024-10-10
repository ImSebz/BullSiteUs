import './App.css';
import { Header } from './components/Header/Header';
import { Slogan } from './components/Slogan/Slogan';
import { Services } from './components/Services/Services'; 
import { PossibleInfo } from './components/PossibleInfo/PossibleInfo'; 
import { Contact } from './components/Contact/Contact'; 
import { Footer } from './components/Footer/Footer';
 
function App() {

  return (
    <>
      <Header/>
      <Slogan/>
      <Services/>
      <PossibleInfo/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
